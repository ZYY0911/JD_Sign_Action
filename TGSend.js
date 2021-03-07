//async function reMind(axios, config, reMindMsg) {
//   axios.defaults.baseURL = `https://sc.ftqq.com/${config.SCKEY}.send`;
//   let { data: res } = await axios.request({
//     method: "post",
//     data: `text=${reMindMsg.text}&desp=${reMindMsg.desp}`,
//   });
//   let msg = "";
//   if (res.errno == 0) {
//     msg = "发送提醒成功！";
//   } else {
//     msg = "发送提醒失败！" + res.errmsg;
//   }
//   return msg;
// }
// module.exports = reMind;

async function tgBotNotify(axios, config, reMindMsg) {
    axios.defaults.baseURL = `https://api.telegram.org/bot${config.TG_BOT_TOKEN}/sendMessage`;
    let {data: res} = await axios.request({
        method: "post",
        data: `chat_id=${config.TG_USER_ID}&text=${reMindMsg.text}\n\n${reMindMsg.desp}&disable_web_page_preview=true`,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    let msg = "";
  if (res.errno == 0) {
    msg = "发送提醒成功！";
  } else {
    msg = "发送提醒失败！" + res.errmsg;
  }
  return msg;
}

module.exports = tgBotNotify;