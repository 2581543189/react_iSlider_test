
import iSlider from './iSlider.js';
import styles from './index.css';
import classNames from 'classnames';
import { connect } from 'dva';
import React from 'react';

import man_1 from './img/man_1.png'
import man_2 from './img/man_2.png'
import man_3 from './img/man_3.png'
import man_4 from './img/man_4.png'



//className={classNames(styles.box,styles.item_1)}
//className={styles.}


class SliderLayout extends React.PureComponent {

    componentDidMount() {
        let myslider=new iSlider({
            wrap:'#wrap',
            item:'.'+styles.item,
            playClass:styles.play,
            onslide:function (index) {
                if (index === 7) {
                    document.getElementById('J_joinNum').innerHTML = parseInt(Math.random()*10000,10);
                }
            }
        }); 
        this.myslider = myslider;
    }

    buttonClick(){
        if(this.myslider ){
            this.myslider.next();
        }

    }

    render(){ 

        return(
        <div className={styles.bodybox}>
            <div className={styles.wrap} id="wrap">

                <div className={classNames(styles.item,styles.item_1)}>
                    <div className={styles.box}>
                        <h1 className={styles.hide}>你是否也试过漫漫长夜一个人过…</h1>
                        <div className={styles.mod_container}>
                            <p className={classNames(styles.sprite,styles.text_1)}></p>
                            <p className={classNames(styles.sprite,styles.text_2)}></p>
                            <div className={classNames(styles.sprite,styles.scene)}></div>
                            <div className={classNames(styles.text_3,styles.sprite_global)}></div>
                            <div className={classNames(styles.text_4,styles.sprite_global)}></div>
                            <div className={classNames(styles.text_5,styles.sprite_global)}></div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.item,styles.item_2)}>
                    <div className={styles.box}>
                        <h1  className={styles.hide}>救星驾到 秒变高富帅秘诀 </h1>
                        <div  className={styles.mod_container}>
                            <p className={classNames(styles.sprite,styles.text_1)}></p>
                            <p className={classNames(styles.sprite,styles.text_2)}></p>
                            <div className={classNames(styles.sprite,styles.scene)}></div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.item,styles.item_3)}>
                    <div className={styles.box}>
                    <h1 className={styles.hide}>尊贵标识 终于，成为有身份的人！ </h1>
                        <div className={styles.mod_container}>
                            <p className={classNames(styles.sprite,styles.text_1)}></p>
                            <p className={classNames(styles.sprite,styles.text_2)}></p>
                            <div className={classNames(styles.sprite,styles.scene)}></div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.item,styles.item_4)}>
                    <div className={styles.box}>
                        <h1 className={styles.hide}>最有品味 追求高品质，听歌只听无损音质</h1>
                        <div className={styles.mod_container}>
                            <p className={classNames(styles.sprite,styles.text_1)}></p>
                            <p className={classNames(styles.sprite,styles.text_2)}></p>
                            <div className={classNames(styles.sprite,styles.scene)}><i className={styles.sprite_global}></i><i className={styles.sprite_global}></i><i className={styles.sprite_global}></i></div>
                            <div  className={classNames(styles.desk,styles.sprite_global)}></div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.item,styles.item_5)}>
                    <div className={styles.box}>
                        <h1 className={styles.hide}>把妹神器 以歌传情，送她空间背景音乐 </h1>
                        <div className={styles.mod_container}>
                            <p className={classNames(styles.sprite,styles.text_1)}></p>
                            <p className={classNames(styles.sprite,styles.text_2)}></p>
                            <div className={classNames(styles.sprite,styles.scene)}>
                                <i className={classNames(styles.icon_zone,styles.sprite_global)}></i>
                                <i className={styles.sprite_global}></i>
                                <i className={styles.sprite_global}></i>
                                <i className={styles.sprite_global}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.item,styles.item_6)}>
                    <div className={styles.box}>
                        <h1 className={styles.hide}>把妹成功！ 谢谢绿钻，让我登上人生巅峰 </h1>
                        <div className={styles.mod_container}>
                            <p className={classNames(styles.sprite,styles.text_1)}></p>
                            <p className={classNames(styles.sprite,styles.text_2)}></p>
                            <div className={classNames(styles.sprite,styles.scene)}></div>
                            <p className={styles.text_3}>绿钻邀您加入高富帅行列<br/>高高兴兴，回家过年！</p>
                            <i className={styles.boy_girl}></i>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.item,styles.item_7)}>
                    <h1 className={styles.hide}>加入绿钻 成为QQ音乐世界VIP，独享高大上特权</h1>
                    <div className={styles.box}>
                        <div className={styles.mod_container}>
                            <p className={classNames(styles.sprite,styles.text_1)}></p>
                            <p className={classNames(styles.sprite,styles.text_2)}></p>
                            <div className={classNames(styles.sprite,styles.scene)}>
                                <img alt="" src={man_1}/>
                                <img alt="" src={man_2}/>
                                <img alt="" src={man_3}/>
                                <img alt="" src={man_4}/>
                                <i className={styles.tips_1}></i>
                                <i className={styles.tips_2}></i>
                            </div>
                            <a className={styles.btn_open_vip} href="#" id="J_openvip">立即开通</a>
                        </div>
                    </div>
                </div>

                <div className={classNames(styles.item,styles.item_8)}>
                    <div className={styles.box}>
                        <i className={classNames(styles.music_logo,styles.sprite_global)}></i>
                        <p className={classNames(styles.anim,styles.text_1)}>你是第<strong id="J_joinNum"></strong>位参与者</p>
                        <p className={classNames(styles.anim,styles.text_2)}>分享即有机会得iPhone6</p>
                        <div className={classNames(styles.anim,styles.scene)}><i></i></div>
                        <a className={classNames(styles.anim,styles.btn_get_gift)} href="#" id="J_getGift">我也要赢iPhone6</a>
                        <p className={classNames(styles.anim,styles.text_3)}>每天送出1台，助力高富帅，回家好过年！</p>
                    </div>
                </div>
            </div>
            {/* 加载提示 _S  */}
            <div className={styles.global}>
                <div className={styles.slider}><span className={styles.sprite_global} onClick={() => this.buttonClick()}></span></div>
            </div>
        </div>  
        )
    }
}
export default connect((state) => {return {}})(SliderLayout);
