import React, { Component } from 'react'
import globalStyles from '../style.css'
import { connect } from 'dva'
import Handleheader from '../../Layouts/Content'

const picture = '/img/school.jpg'

@connect(({ data }) => ({
    mapData: data.mapData || []
}))

@Handleheader
export default class Content extends Component {

    componentWillMount() {
        // if(this.props.mapData.length > 0 ) return
        let postData = {
            params: '{}',
            method: 'query_data',
            model: 'xs.campuses'
        }

        this.props.dispatch({
            type: 'data/fetch',
            payload: {
                dataKey: 'mapData',
                reqPath: 'querydata',
                postData
            }
        })
    }

    componentDidMount() {
        const map = new window.BMap.Map("allmap") // 创建Map实例
        const navigationControl = new window.BMap.NavigationControl({  // 设置定位
            // 靠左上角位置
            anchor: 'BMAP_ANCHOR_TOP_LEFT',
            // LARGE类型
            type: 'BMAP_NAVIGATION_CONTROL_LARGE',
            // 启用显示定位
            enableGeolocation: true
        })

        map.centerAndZoom("上海杨浦区教育局", 16)  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(navigationControl);   //添加地图类型控件
        // map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        map.setMapStyle({
            styleJson: [
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                        "color": "#000000",
                        "visibility": "off"
                    }
                }
            ]
        })
        this.renderMap(map)
    }

    renderMap = (map) => {
        const { mapData } = this.props
            , myGeo = new window.BMap.Geocoder()

        let markers = []
        console.log('45654564654', mapData);

        mapData.forEach(result => {
            let content =
                "<div>" +
                "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>" + result.unit_name + "</h4>" +
                "<img style='float:right;margin:4px' id='imgDemo' src='" + picture + "' width='140' height='100' title='photo'/>" +
                "<p style='margin:0;line-height:1.5;font-size:13px'>" + "地址 : " + result.campuses_address + "</p>" +
                "<div style='padding: 10px 10px 0 0; float:right' ><a href='#/main/:1/:" + result.base_id + "/schoolBaseInfo' onclick='document.cookie=" + "\"unit_id=" + result.unit_id + "\"" + "'>详情&gt;&gt;</a></div>"
            "</div>";
            let data_info = [];
            myGeo.getPoint(result.campuses_address, function (point) {
                if (point) {
                    data_info.push([point.lng, point.lat]);
                    let opts = {
                        width: 350,     // 信息窗口宽度
                        height: 160,     // 信息窗口高度
                        enableMessage: true//设置允许信息窗发送短息
                    };

                    for (var i = 0; i < data_info.length; i++) {
                        let marker = new window.BMap.Marker(new window.BMap.Point(data_info[i][0], data_info[i][1]));  // 创建标注
                        // map.addOverlay(marker);               // 将标注添加到地图中                      
                        markers.push(marker);
                        addClickHandler(content, marker);
                    }
                    function addClickHandler(content, marker) {
                        marker.addEventListener("click", function (e) {
                            openInfo(content, e)
                        }
                        );
                    }
                    function openInfo(content, e) {
                        var p = e.target;
                        var point = new window.BMap.Point(p.getPosition().lng, p.getPosition().lat);
                        var infoWindow = new window.BMap.InfoWindow(content, opts);  // 创建信息窗口对象
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                    }
                } else {
                    alert("您选择地址没有解析到结果!");
                }
            }, "上海市")
        })
        setTimeout(
            function () {
                var markerClusterer = new window.BMapLib.MarkerClusterer(map, { markers: markers });
            }, 3000
        )

    }

    render() {
        console.log(this.props.mapData);

        return (
                <React.Fragment>
                    <div style={{ width: (document.body.clientWidth - 250), height: (document.body.clientHeight - 48 - 88),margin: '-24px -10px' }} id="allmap"></div>
                </React.Fragment>
        )
    }
}
