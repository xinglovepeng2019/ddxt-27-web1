checkLogin()
renderUserName()
registerLogout()
getData()

// 薪资走势
function renderYearSalary(year){
//    初始化echarts实例
 const dom =document.querySelector("#line")
 const myChart =echarts.init(dom)
//  定义选项和数据
const option = {
    // 标题
    title:{
      text:"2023全学科薪资走势",
    //   距离容器左侧和顶部的距离
      left:'15',
      top:'15'
    },
    // 提示框组件
    tooltip:{
       show:true,
       trigger:"axis"
    },
    // 绘制网格
    grid:{
       top:'20%'
    },
    // x轴
    xAxis: {
        // 坐标轴类型  category 类目轴
      type: 'category',
    //   坐标轴轴线相关设置
      axisLine:{
        lineStyle:{
            // 线的类型
           type:"dashed",
           //    线的颜色  颜色更改之后 文字也会跟着一起变色
           color:"#ccc"
        }
      },
      data: year.map(v=>v.month)
    },
    // y轴
    yAxis: {
      type: 'value',
      splitLine:{
        lineStyle:{
            type:"dashed"
          }
      }
    },
    // 系列列表
    series: [
      {
        data: year.map(v=>v.salary),
        // 折线图
        type: 'line',
        // 标记大小
        symbolSize:10,
        // 线的样式
        lineStyle:{
            // 线宽
          width:8,
          color:{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0, color: '#5b7af0' // 0% 处的颜色
              }, 
              {
                offset: 0.5, color: '#5091ef' // 50% 处的颜色
              },
              {
                offset: 1, color: '#4a9dee' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
        },
        // 是否平滑曲线显示
        smooth:true,
        // 区域填充样式
              // 区域填充样式
        areaStyle:{
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                {
                    offset: 0, color: '#4b99ee' // 0% 处的颜色
                }, 
                {
                    offset: 0.5, color: '#d4e8fb' // 50% 处的颜色
                },
                {
                    offset: 1, color: '#fff' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
      }
    ]
  };

//   基于选项和数据绘制图表
  myChart.setOption(option)
}