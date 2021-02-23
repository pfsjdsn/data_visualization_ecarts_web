// 柱状图模块1
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"))
  // 指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // 修改图表大小
    grid: {
        left: '0%',
        top: '10%',
        right: '0%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            },
            // 修改刻度标签，相关样式
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: '12'
            },
            // 不显示x坐标轴样式
            axisLine: {
              show: false
            }

        }
    ],
    yAxis: [
        {
            type: 'value',
            // 修改刻度标签，相关样式
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: '12'
            },
             axisLine: {
              //  y轴线条改为2像素
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 2
              }
            },
            // y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
  
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
// 把配置项给实例对象
myChart.setOption(option)
})();