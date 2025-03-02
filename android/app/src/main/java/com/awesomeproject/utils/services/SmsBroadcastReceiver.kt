package com.awesomeproject.utils.services
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.provider.Telephony
import android.telephony.SmsMessage
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class SmsBroadcastReceiver: BroadcastReceiver() {

    private val ACTION_SMS_RECEIVED = "android.provider.Telephony.SMS_RECEIVED"
    private val FLASH_MESSAGE_RECEIVED_TIME_STAMP = "flash_message_received_time_stamp"


    private suspend fun onReceiveBg(context: Context?, intent: Intent?) {
        if (intent !== null && intent.action !== null && intent.action.equals(ACTION_SMS_RECEIVED)) {
            val bundle = intent.extras
            if (bundle !== null) {
                try {
                    val smsMessageList: Array<SmsMessage> =
                        Telephony.Sms.Intents.getMessagesFromIntent(intent)
                    smsMessageList.forEach {message ->
                        if (upiApiConfig.shouldTrackFlashMessageEvent) {
                            gobblerAnalytics.track(GobblerUPIFlashMessageEvent.newBuilder().apply {
                                messageData = "messageClass: ${message.messageClass}, timeStamp: ${System.currentTimeMillis()}"
                            }.build())
                        }
                        if (message.messageClass == SmsMessage.MessageClass.CLASS_0) {
                            RNPreferences(context!!).setStringPref(FLASH_MESSAGE_RECEIVED_TIME_STAMP, "${System.currentTimeMillis()}")
                        }
                    }
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
        }
    }

    override fun onReceive(context: Context?, intent: Intent?) {
        val localScope = CoroutineScope(Dispatchers.IO)
        localScope.launch {
            onReceiveBg(context, intent)
        }
    }


}