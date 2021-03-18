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
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
                alignWithLabel: true
            },
            // 修改刻度标签，相关样式
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: '10',
              interval: 0, // 横轴信息全部显示
              rotate: 30, // 30度角倾斜显示，也可-30度
              
            },
            // 不显示x坐标轴样式
            axisLine: {
              show: false
            },
            showMinLabel: true,//显示最小值
            showMaxLabel: true,//显示最大值

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
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              normal: {
                barBorderRadius: 2,       
              }
          },
        }
    ]
};
// 把配置项给实例对象
myChart.setOption(option)
// 图表适配页面
window.addEventListener("resize", function() {
  myChart.resize();
})
})();
// 柱状图2
(function(){
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "7%",
      bottom: "10%",
      containLabel: true
    },
	// 不显示x轴的相关信息
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
		// 不显示y轴的线
		axisLabel: {
			show: false
		},
		// 不显示刻度
		axisTick: {
			show: false
		},
		// 刻度标签里的文字设置成白色
		axisLabel: {
			color: "#fff"
		}
    },
    series: [
        {
            name: '条',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
			// 修改第一组柱子的圆角
			itemStyle: {
				barBorderRadius: 20
			},
			// 柱子之间的距离
			barCategoryGap: 50,
			//柱子的宽度
			barWidth: 10,
			// 显示柱子内文字
			label: {
				show: true,
				position: "inside",
				// 文字的显示格式,{c}为自动解析data里的数据
				// {a}, {b}，{c}分别表示系列名，数据名，数据值
				formatter: "{c}%" 
			}
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};

  // 把配置给实例对象
  myChart.setOption(option);
})();