const baseauth = Buffer.from("4dmin" + ":" + "1tradeapp").toString('base64')

const headers = {
          Authorization: `Basic ${baseauth}`,
        };

        console.log(headers)