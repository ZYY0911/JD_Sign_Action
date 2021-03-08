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

// async function tgBotNotify(axios, config, reMindMsg) {
//     axios.defaults.baseURL = `https://api.telegram.org/bot${config.TG_BOT_TOKEN}/sendMessage`;
//     let {data: res} = await axios.request({
//         method: "post",
//         data: `chat_id=${config.TG_USER_ID}&text=${reMindMsg.text}\n\n${reMindMsg.desp}&disable_web_page_preview=true`,
//         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//     });
//     let msg = "";
//   if (res.ok) {
//     msg = "发送提醒成功！";
//   } else {
//     msg = "发送提醒失败！" + res.description;
//   }
//   return msg;
// }
async  function tgBotNotify(axios,configa,reMindMsg){
    //var data = 'chat_id=1376971804&text=京东签到_2021.03.08京东现金-红包签到失败 京东魔方-尝试查询活动(2) 京东商城-超市签到失败 京东商城-闪购签到失败 京东商城-京豆签到失败 京东商城-转盘查询成功 京东商城-摇一摇签到失败 京东商城-现金签到失败 京东秒杀-红包查询成功 京东金融-钢镚签到失败 京东金融-抽奖签到失败 京东商城-金贴签到失败 京东商城-转盘签到失败 京东秒杀-红包签到失败 京东魔方-尝试查询活动(1) 京东魔方-尝试查询活动(null) 京东金融-签肆查询成功 京东金融-签贰查询成功 京东商城-魔方签到失败 京东汽车-检查签到状态 京东金融-签叁查询成功 京东金融-签伍查询成功 京东金融-签壹查询成功 京东日历-翻牌关注店铺京东商城-图书重复签到京东商城-母婴关注店铺京东商城-童装关注店铺京东金贴-双签查询成功 京东商城-数码关注店铺京东商城-鞋靴签到失败(1)金融现金-双签查询成功 京东商城-女装签到失败(1)京东商城-定制签到失败(1)京东商城-童装签到失败(2)京东商城-数码签到失败(2)京东日历-翻牌签到失败(2)京东商城-母婴签到失败(2)京东商城-个护关注店铺京东商城-美妆关注店铺京东商城-健康关注店铺京东商城-校园重复签到京东商城-服饰重复签到京东商城-清洁关注店铺京东商城-菜场签到失败(1)京东商城-箱包签到失败(1)京东商城-珠宝签到失败(1)京东拍拍-二手重复签到京东商城-个护签到失败(2)京东商城-健康签到失败(2)京东商城-美妆签到失败(2)京东商城-清洁签到失败(2)天天加速-查询上次任务 天天加速-目前结束时间: 2021-03-09 02:45:32 [29%]天天加速-暂无太空事件 天天加速-暂无有效道具 天天加速-查询无道具ID 金融京豆-双签查询成功 京东-总现金查询成功 京东-总红包查询成功 京东-总金贴查询成功 京东-总京豆查询成功 京东-总钢镚查询成功 【签到概览】:  失败40个【账号总计】:  526京豆, 0.35钢镚【其他总计】:  0.30金贴, 1.47现金, 0.73红包京东商城-京豆: 失败, 原因: 已签过 ⚠️京东商城-超市: 失败, 原因: 已签过 ⚠️京东金融-钢镚: 失败, 原因: 已签过 ⚠️京东商城-转盘: 失败, 原因: 已转过 ⚠️京东商城-闪购: 失败, 原因: 已签过 ⚠️京东现金-红包: 失败, 原因: 已签过 ⚠️京东商城-魔方: 失败, 原因: 无机会 ⚠️京东商城-金贴: 失败, 原因: 已签过 ⚠️京东商城-现金: 失败, 原因: 已签过 ⚠️京东商城-摇摇: 失败, 原因: 已摇过 ⚠️京东秒杀-红包: 失败, 原因: 已领取 ⚠️京东金融-抽奖: 失败, 原因: 已签过 ⚠️京东商城-汽车: 失败, 原因: 已签过 ⚠️京东金融-签壹: 失败, 原因: 已签过 ⚠️京东金融-签贰: 失败, 原因: 已签过 ⚠️京东金融-签叁: 失败, 原因: 已签过 ⚠️京东金融-签肆: 失败, 原因: 已签过 ⚠️京东金融-签伍: 失败, 原因: 已签过 ⚠️京东商城-定制: 失败, 原因: 已签过 ⚠️京东商城-鞋靴: 失败, 原因: 已签过 ⚠️京东日历-翻牌: 失败, 活动太火爆了，请稍后再试~ ⚠️京东商城-童装: 失败, 活动太火爆了，请稍后再试~ ⚠️京东商城-母婴: 失败, 活动太火爆了，请稍后再试~ ⚠️京东商城-数码: 失败, 活动太火爆了，请稍后再试~ ⚠️京东商城-女装: 失败, 原因: 已签过 ⚠️京东商城-图书: 失败, 原因: 已签过 ⚠️京东金贴-双签: 失败, 原因: 已签过 ⚠️金融现金-双签: 失败, 原因: 已签过 ⚠️京东商城-服饰: 失败, 原因: 已签过 ⚠️京东商城-箱包: 失败, 原因: 已签过 ⚠️京东商城-校园: 失败, 原因: 已签过 ⚠️京东商城-健康: 失败, 活动太火爆了，请稍后再试~ ⚠️京东拍拍-二手: 失败, 原因: 已签过 ⚠️京东商城-清洁: 失败, 活动太火爆了，请稍后再试~ ⚠️京东商城-个护: 失败, 活动太火爆了，请稍后再试~ ⚠️京东商城-珠宝: 失败, 原因: 已签过 ⚠️京东商城-美妆: 失败, 活动太火爆了，请稍后再试~ ⚠️京东商城-菜场: 失败, 原因: 已签过 ⚠️京东天天-加速: 失败, 加速中[29%] ⚠️金融京豆-双签: 失败, 原因: 已签过 ⚠️签到用时: 24.65 秒&disable_web_page_preview=true';
    let data = 'chat_id=' + configa.tgtocken + '&text=' + reMindMsg.text + reMindMsg.desp + '&disable_web_page_preview=true';
    let config = {
        method: 'post',
        url: 'https://api.telegram.org/bot' + configa.tgid + '/sendMessage',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = tgBotNotify;