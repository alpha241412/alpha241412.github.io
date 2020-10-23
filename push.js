var webPush = require('webPush')

const vapidKeys = {
    "publickey" : "BPv0VqIC_vzYZ-TdUX78TnTC0np0mNt7GkuR5ZFI71vNEkOmx4MJ8SJkasZIAGqaPXkVmDbiFH50GqGWgocynPY",
    "privatekey" : "dGI6jZvsD9k4mZNh7lt4Hn54CtYFSBUCPoGx5d46b9M"
}

webPush.setVapidDetails(
    'mailto:alpha.rate99@gmail.com',
    vapidKeys.publickey,
    vapidKeys.privatekey
)

var pusSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dMs6i_X3Y68:APA91bFm3LBxRIZVX1mQ3mVqvI9FmAMjiGoY1fAFLOQLurxh5_9Ybe9OLc0aQ1nKc5oQ6jGK06MoFh1D6nIMFKOpt9XYPOVCuLWR6oWKHfxOfnvF24xChlx_0LDJ6vtHo8QtHY3c0ZcO",
    "keys":{
        "p256dh": "BFnQekfvSwYlqaE0ixxy/WH/p/IL1I6/2bjf92JhIQQ885LNO8sOvsQ2H4lx9iGbrbJ3fBGnRRF0JcDctqjTRuI=",
        "auth": "BFnQekfvSwYlqaE0ixxy/WH/p/IL1I6/2bjf92JhIQQ885LNO8sOvsQ2H4lx9iGbrbJ3fBGnRRF0JcDctqjTRuI=" // lupa ketik auth belum bisa unsubs
    }
}

var payLoad = 'Selamat Aplikasi sudah bisa push notif'

var options = {
    gcmAPIKey: '712784676471',
    TTL: 60
}

webPush.sendNotification(
    pusSubscription,
    payLoad,
    options
)