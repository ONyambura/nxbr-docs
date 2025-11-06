---
icon: instalod
---

# Installation

* Download the resource from [Keymaster](https://keymaster.fivem.net/) or [CFX Portal](https://portal.cfx.re/assets/granted-assets)
* Unpack the resource[ _lb-phone-music_](https://nyambura.tebex.io/package/5586818) into your desired resources location.

{% hint style="info" %}
eg: data/resources/\[phone]/
{% endhint %}

* Database Installation

{% hint style="danger" %}
Execute the SQL Query you'll find inside our resource, into your database.&#x20;

_Without running the provided sql query, the resource wont work._

SQL File: lb-phone-music/phone\_ntune\_playlists.sql

{% code overflow="wrap" %}
```sql
DROP TABLE IF EXISTS `phone_ntune_playlists`;
CREATE TABLE `phone_ntune_playlists`  (
  `phoneNumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `trackId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `date` timestamp NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;
```
{% endcode %}
{% endhint %}

* Start the resource on your _server.cfg_

{% hint style="success" %}
ensure lb-phone

ensure lb-phone-music
{% endhint %}
