// 柱状图模块1
(function () {
	// 实例化对象
	var myChart = echarts.init(document.querySelector(".bar .chart"))
	// 指定配置项和数据
	var option = {
		color: ['#2f89cf'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
		xAxis: [{
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
			showMinLabel: true, //显示最小值
			showMaxLabel: true, //显示最大值

		}],
		yAxis: [{
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

		}],
		series: [{
			name: '直接访问',
			type: 'bar',
			barWidth: '35%',
			data: [200, 300, 300, 900, 1500, 1200, 600],
			itemStyle: {
				normal: {
					barBorderRadius: 2,
				}
			},
		}]
	};
	// 把配置项给实例对象
	myChart.setOption(option)
	// 图表适配页面
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})();
// 柱状图2
(function () {
	// 实例化对象
	var myChart = echarts.init(document.querySelector(".bar2 .chart"));
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	// 指定配置和数据
	var option = {
		grid: {
			top: "10%",
			left: "1%",
			bottom: "10%",
			containLabel: true
		},
		// 不显示x轴的相关信息
		xAxis: {
			show: false,
		},
		yAxis: [{
				type: 'category',
				// 反向坐标轴
				inverse: true,
				data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
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
			{
				type: 'category',
				// 反向坐标轴
				inverse: true,
				data: [702, 350, 610, 793, 664],
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
		],
		series: [{
				name: '条',
				type: 'bar',
				data: [70, 34, 60, 78, 69],
				yAxisIndex: 0,
				// 修改第一组柱子的圆角
				itemStyle: {
					barBorderRadius: 20,
					// 修改柱子的颜色
					color: function (params) {
						// params 是柱子的对象
						// dataIndex 是柱子的索引
						return myColor[params.dataIndex];
					}
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
				name: '框',
				type: 'bar',
				barCategoryGap: 50,
				barWidth: 15,
				data: [100, 100, 100, 100, 100],
				yAxisIndex: 1,
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 3,
					barBorderRadius: 15
				},
			}
		]
	};

	// 把配置给实例对象
	myChart.setOption(option);
	// 图表适配页面
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})();
// 折线图1模块
(function () {
	var yearData = [
		{
		  year: '2020',  // 年份
		  data: [  // 两个数组是因为有两条线
			   [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
			   [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			]
		},
		{
		  year: '2021',  // 年份
		  data: [  // 两个数组是因为有两条线
			   [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
			   [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
			]
		}
	];
	// 实例化对象
	var myChart = echarts.init(document.querySelector(".line .chart"))
	// 指定配置
	var option = {
		// 设置线条颜色
		color: ['#00f2f1', '#ed3f35'],
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			// data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
			// 如果series有name值，则legend可以不用写data，效果是一样显示的
			textStyle: {
				color: "#4c9bfd"
			},
			right: "10%"
		},
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			show: true, // 显示边框
			borderColor: '#012f4a', // 边框颜色
			containLabel: true // 包含刻度文字在内
		},
		//   显示下载工具
		// toolbox: {
		// 	feature: {
		// 		saveAsImage: {}
		// 	}
		// },
		xAxis: {
			type: 'category',
			boundaryGap: false, // 去除轴内间距
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: '#4c9bfd', // 文本颜色
				interval:0, // 强制设置坐标轴分割间隔,可全部显示x轴数据
				rotate:45
			},
			axisLine: {	
				show: false // 去除轴线
			},
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: '#4c9bfd' // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			},
			splitLine: {
				lineStyle: {
					color: '#012f4a' // 分割线颜色
				}
			}
		},
		series: [{
				name: '新增粉丝',
				type: 'line',
				stack: '总量',
				// 让线条有弧度
				smooth: true,
				data:  yearData[0].data[0],
			},
			{
				name: '新增游客',
				type: 'line',
				stack: '总量',
				// 让线条有弧度
				smooth: true,
				data: yearData[0].data[1], 
			}
		]
	};
	// 把配置给实例对象
	myChart.setOption(option);
	// 图表适配页面
	window.addEventListener("resize", function () { 
		myChart.resize();
	});
	// 点击切换效果
	$(".line h2").on("click", "a", function() {
		// 点击a后，根据a的索引号找到对应的yearData相关对象
		var obj = yearData[$(this).index()];
		option.series[0].data = obj.data[0];
		option.series[1].data = obj.data[1];
		// 重新渲染
		myChart.setOption(option);
	})
})();
// 折线图2模块
(function() {
	var myChart = echarts.init(document.querySelector('.line2 .chart'));
	var option = {
		tooltip: {
			trigger: 'axis',
		},
		legend: {
			data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '邮件营销',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			},
			{
				name: '联盟广告',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [220, 182, 191, 234, 290, 330, 310]
			}
		]
	};
	myChart.setOption(option);
})();