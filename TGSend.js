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

  return msg;
}

module.exports = tgBotNotify;