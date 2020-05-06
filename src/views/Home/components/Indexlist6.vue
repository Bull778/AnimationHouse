<template>
  <div class="manga-list">
    <div class="manga-list-title index">
      排行榜
      <div class="manga-list-title-right">
        <a
          class="manga-list-title-right-item"
          @click="cur=0,translateX='0px'"
          :class="{active:cur==0}"
          href="javascript:void(0);"
          >人气</a
        >
        <a
          class="manga-list-title-right-item"
          @click="cur=1,translateX='-345px'"
          :class="{active:cur==1}"
          href="javascript:void(0);"
          >新番</a
        >
        <a
          class="manga-list-title-right-item"
          @click="cur=2,translateX='-690px'"
          :class="{active:cur==2}"
          href="javascript:void(0);"
          >收藏</a
        >
        <a
          class="manga-list-title-right-item"
          @click="cur=3,translateX='-1050px'"
          :class="{active:cur==3}"
          href="javascript:void(0);"
          >吐槽</a
        >
      </div>
    </div>
    <ul class="rank-list index">
      <div
        class="swiper-container4 swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal"
        id="rank_list"
      >
        <div
          class="swiper-wrapper"
          :class="{main1:cur==0,main2:cur==1,main3:cur==2,main4:cur==3}"
        >
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            id="rank_1"
            data-swiper-slide-index="0"
          >
            <li>
              <a href="#" title="鬼灭之刃">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/22/21840/20190122213411_320x246_46.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">鬼灭之刃</p>
                    <p class="rank-list-info-right-subtitle">
                      少年与gui的战斗不曾停歇
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="海贼王">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/1/432/20180913185949_320x246_47.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">海贼王</p>
                    <p class="rank-list-info-right-subtitle">
                      相传22年前，在一个童话般的世界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="一拳超人">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm9tel.cdndm5.com/11/10684/20180912193016_320x246_33.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">一拳超人</p>
                    <p class="rank-list-info-right-subtitle">
                      主人公埼玉原本是一名整日奔波于...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="王者天下">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/7/6746/20190222150546_320x246_42.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">王者天下</p>
                    <p class="rank-list-info-right-subtitle">
                      王者天下漫画 ，王者天下漫画是...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="辉夜大小姐想让我告白 ~天才们的恋爱头脑战~"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm3tel.cdndm5.com/19/18417/20190904142557_320x246_32.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      辉夜大小姐想让我告白
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      恋爱正是适合天才的游戏！？秀知...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
            id="rank_2"
            data-swiper-slide-index="1"
          >
            <li>
              <a href="#" title="黑婚">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm4tel.cdndm5.com/59/58652/20200330185304_320x246_36.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">黑婚</p>
                    <p class="rank-list-info-right-subtitle">
                      在坏心眼的男子之后……是像恶魔...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="连续按下亿年按钮的我无敌了"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58297/20200317225438_320x246_41.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      连续按下亿年按钮的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      得知按下一个按钮就可以在“异界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="勇者，奇迹可不是免费的"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm2tel.cdndm5.com/59/58819/20200407095215_320x246_38.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      勇者，奇迹可不是免费
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      冒险者队伍被全灭时，会在教会复...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="捡到被退婚大小姐的我，教会她做坏坏的事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58690/20200401090112_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      捡到被退婚大小姐的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是邪恶的魔法使，让可怜少女堕...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="家里蹲大小姐是懂兽医的圣兽饲养员"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm1tel.cdndm5.com/59/58636/20200329193752_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      家里蹲大小姐是懂兽医
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      成为图书管理员....？本应如此.....
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate"
            id="rank_3"
            data-swiper-slide-index="2"
          >
            <li>
              <a
                href="#"
                title="拥有开挂技能「薄影」的公会职员原来是传说级别的暗杀者"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/53/52128/20190728130534_320x246_34.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      拥有开挂技能「薄影」
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      杀死最强的魔王，成为无人知晓的...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="黑婚">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm4tel.cdndm5.com/59/58652/20200330185304_320x246_36.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">黑婚</p>
                    <p class="rank-list-info-right-subtitle">
                      在坏心眼的男子之后……是像恶魔...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="连续按下亿年按钮的我无敌了"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58297/20200317225438_320x246_41.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      连续按下亿年按钮的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      得知按下一个按钮就可以在“异界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="勇者，奇迹可不是免费的"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm2tel.cdndm5.com/59/58819/20200407095215_320x246_38.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      勇者，奇迹可不是免费
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      冒险者队伍被全灭时，会在教会复...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="捡到被退婚大小姐的我，教会她做坏坏的事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58690/20200401090112_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      捡到被退婚大小姐的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是邪恶的魔法使，让可怜少女堕...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
            id="rank_4"
            data-swiper-slide-index="3"
          >
            <li>
              <a
                href="#"
                title="想要成为影之实力者"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm6tel.cdndm5.com/48/47061/20191013160943_320x246_42.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">想要成为影之实力者</p>
                    <p class="rank-list-info-right-subtitle">
                      『吾乃暗影。潜伏于影、狩猎阴影...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="夏洛特的五个徒弟">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/59/58680/20200331154248_320x246_25.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">夏洛特的五个徒弟</p>
                    <p class="rank-list-info-right-subtitle">
                      拯救了世界的大魔法师「夏洛特．...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="被卷入了勇者召唤事件却发现异世界很和平"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm9tel.cdndm5.com/46/45777/20181021151829_320x246_27.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      被卷入了勇者召唤事件
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      作为勇者被召唤到异世界，等等已...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="关于我转生后成为史莱姆的那件事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm6tel.cdndm5.com/19/18071/20180918162019_320x246_43.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      关于我转生后成为史莱
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      普通上班族三上悟（37，童贞）遇...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="我的诅咒装备不可能这么可爱"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/51/50649/20190602122235_320x246_28.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      我的诅咒装备不可能这
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是一个由装备决定人生的世界 ...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-active"
            id="rank_1"
            data-swiper-slide-index="0"
          >
            <li>
              <a href="#" title="鬼灭之刃">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/22/21840/20190122213411_320x246_46.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">鬼灭之刃</p>
                    <p class="rank-list-info-right-subtitle">
                      少年与gui的战斗不曾停歇
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="海贼王">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/1/432/20180913185949_320x246_47.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">海贼王</p>
                    <p class="rank-list-info-right-subtitle">
                      相传22年前，在一个童话般的世界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="一拳超人">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm9tel.cdndm5.com/11/10684/20180912193016_320x246_33.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">一拳超人</p>
                    <p class="rank-list-info-right-subtitle">
                      主人公埼玉原本是一名整日奔波于...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="王者天下">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/7/6746/20190222150546_320x246_42.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">王者天下</p>
                    <p class="rank-list-info-right-subtitle">
                      王者天下漫画 ，王者天下漫画是...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="辉夜大小姐想让我告白 ~天才们的恋爱头脑战~"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm3tel.cdndm5.com/19/18417/20190904142557_320x246_32.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      辉夜大小姐想让我告白
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      恋爱正是适合天才的游戏！？秀知...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-next"
            id="rank_2"
            data-swiper-slide-index="1"
          >
            <li>
              <a href="#" title="黑婚">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm4tel.cdndm5.com/59/58652/20200330185304_320x246_36.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">黑婚</p>
                    <p class="rank-list-info-right-subtitle">
                      在坏心眼的男子之后……是像恶魔...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="连续按下亿年按钮的我无敌了"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58297/20200317225438_320x246_41.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      连续按下亿年按钮的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      得知按下一个按钮就可以在“异界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="勇者，奇迹可不是免费的"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm2tel.cdndm5.com/59/58819/20200407095215_320x246_38.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      勇者，奇迹可不是免费
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      冒险者队伍被全灭时，会在教会复...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="捡到被退婚大小姐的我，教会她做坏坏的事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58690/20200401090112_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      捡到被退婚大小姐的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是邪恶的魔法使，让可怜少女堕...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="家里蹲大小姐是懂兽医的圣兽饲养员"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm1tel.cdndm5.com/59/58636/20200329193752_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      家里蹲大小姐是懂兽医
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      成为图书管理员....？本应如此.....
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div class="swiper-slide" id="rank_3" data-swiper-slide-index="2">
            <li>
              <a
                href="#"
                title="拥有开挂技能「薄影」的公会职员原来是传说级别的暗杀者"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/53/52128/20190728130534_320x246_34.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      拥有开挂技能「薄影」
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      杀死最强的魔王，成为无人知晓的...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="黑婚">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm4tel.cdndm5.com/59/58652/20200330185304_320x246_36.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">黑婚</p>
                    <p class="rank-list-info-right-subtitle">
                      在坏心眼的男子之后……是像恶魔...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="连续按下亿年按钮的我无敌了"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58297/20200317225438_320x246_41.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      连续按下亿年按钮的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      得知按下一个按钮就可以在“异界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="勇者，奇迹可不是免费的"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm2tel.cdndm5.com/59/58819/20200407095215_320x246_38.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      勇者，奇迹可不是免费
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      冒险者队伍被全灭时，会在教会复...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="捡到被退婚大小姐的我，教会她做坏坏的事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58690/20200401090112_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      捡到被退婚大小姐的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是邪恶的魔法使，让可怜少女堕...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate-prev"
            id="rank_4"
            data-swiper-slide-index="3"
          >
            <li>
              <a
                href="#"
                title="想要成为影之实力者"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm6tel.cdndm5.com/48/47061/20191013160943_320x246_42.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">想要成为影之实力者</p>
                    <p class="rank-list-info-right-subtitle">
                      『吾乃暗影。潜伏于影、狩猎阴影...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="夏洛特的五个徒弟">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/59/58680/20200331154248_320x246_25.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">夏洛特的五个徒弟</p>
                    <p class="rank-list-info-right-subtitle">
                      拯救了世界的大魔法师「夏洛特．...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="被卷入了勇者召唤事件却发现异世界很和平"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm9tel.cdndm5.com/46/45777/20181021151829_320x246_27.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      被卷入了勇者召唤事件
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      作为勇者被召唤到异世界，等等已...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="关于我转生后成为史莱姆的那件事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm6tel.cdndm5.com/19/18071/20180918162019_320x246_43.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      关于我转生后成为史莱
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      普通上班族三上悟（37，童贞）遇...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="我的诅咒装备不可能这么可爱"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/51/50649/20190602122235_320x246_28.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      我的诅咒装备不可能这
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是一个由装备决定人生的世界 ...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            id="rank_1"
            data-swiper-slide-index="0"
          >
            <li>
              <a href="#" title="鬼灭之刃">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/22/21840/20190122213411_320x246_46.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">鬼灭之刃</p>
                    <p class="rank-list-info-right-subtitle">
                      少年与gui的战斗不曾停歇
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="海贼王">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/1/432/20180913185949_320x246_47.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">海贼王</p>
                    <p class="rank-list-info-right-subtitle">
                      相传22年前，在一个童话般的世界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="一拳超人">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm9tel.cdndm5.com/11/10684/20180912193016_320x246_33.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">一拳超人</p>
                    <p class="rank-list-info-right-subtitle">
                      主人公埼玉原本是一名整日奔波于...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="王者天下">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/7/6746/20190222150546_320x246_42.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">王者天下</p>
                    <p class="rank-list-info-right-subtitle">
                      王者天下漫画 ，王者天下漫画是...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="辉夜大小姐想让我告白 ~天才们的恋爱头脑战~"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm3tel.cdndm5.com/19/18417/20190904142557_320x246_32.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      辉夜大小姐想让我告白
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      恋爱正是适合天才的游戏！？秀知...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
            id="rank_2"
            data-swiper-slide-index="1"
          >
            <li>
              <a href="#" title="黑婚">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm4tel.cdndm5.com/59/58652/20200330185304_320x246_36.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">黑婚</p>
                    <p class="rank-list-info-right-subtitle">
                      在坏心眼的男子之后……是像恶魔...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="连续按下亿年按钮的我无敌了"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58297/20200317225438_320x246_41.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      连续按下亿年按钮的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      得知按下一个按钮就可以在“异界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="勇者，奇迹可不是免费的"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm2tel.cdndm5.com/59/58819/20200407095215_320x246_38.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      勇者，奇迹可不是免费
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      冒险者队伍被全灭时，会在教会复...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="捡到被退婚大小姐的我，教会她做坏坏的事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58690/20200401090112_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      捡到被退婚大小姐的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是邪恶的魔法使，让可怜少女堕...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="家里蹲大小姐是懂兽医的圣兽饲养员"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm1tel.cdndm5.com/59/58636/20200329193752_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      家里蹲大小姐是懂兽医
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      成为图书管理员....？本应如此.....
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate"
            id="rank_3"
            data-swiper-slide-index="2"
          >
            <li>
              <a
                href="#"
                title="拥有开挂技能「薄影」的公会职员原来是传说级别的暗杀者"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/53/52128/20190728130534_320x246_34.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      拥有开挂技能「薄影」
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      杀死最强的魔王，成为无人知晓的...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="黑婚">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm4tel.cdndm5.com/59/58652/20200330185304_320x246_36.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">黑婚</p>
                    <p class="rank-list-info-right-subtitle">
                      在坏心眼的男子之后……是像恶魔...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="连续按下亿年按钮的我无敌了"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58297/20200317225438_320x246_41.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      连续按下亿年按钮的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      得知按下一个按钮就可以在“异界...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="勇者，奇迹可不是免费的"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm2tel.cdndm5.com/59/58819/20200407095215_320x246_38.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      勇者，奇迹可不是免费
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      冒险者队伍被全灭时，会在教会复...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="捡到被退婚大小姐的我，教会她做坏坏的事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/59/58690/20200401090112_320x246_37.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      捡到被退婚大小姐的我
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是邪恶的魔法使，让可怜少女堕...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate"
            id="rank_4"
            data-swiper-slide-index="3"
          >
            <li>
              <a
                href="#"
                title="想要成为影之实力者"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm6tel.cdndm5.com/48/47061/20191013160943_320x246_42.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">想要成为影之实力者</p>
                    <p class="rank-list-info-right-subtitle">
                      『吾乃暗影。潜伏于影、狩猎阴影...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" title="夏洛特的五个徒弟">
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm7tel.cdndm5.com/59/58680/20200331154248_320x246_25.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">夏洛特的五个徒弟</p>
                    <p class="rank-list-info-right-subtitle">
                      拯救了世界的大魔法师「夏洛特．...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="被卷入了勇者召唤事件却发现异世界很和平"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm9tel.cdndm5.com/46/45777/20181021151829_320x246_27.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      被卷入了勇者召唤事件
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      作为勇者被召唤到异世界，等等已...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="关于我转生后成为史莱姆的那件事"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm6tel.cdndm5.com/19/18071/20180918162019_320x246_43.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      关于我转生后成为史莱
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      普通上班族三上悟（37，童贞）遇...
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="我的诅咒装备不可能这么可爱"
              >
                <div class="rank-list-cover">
                  <img
                    class="rank-list-cover-img"
                    src="http://mhfm5tel.cdndm5.com/51/50649/20190602122235_320x246_28.jpg"
                  />
                </div>
                <div class="rank-list-info">
                  <div class="rank-list-info-right">
                    <p class="rank-list-info-right-title">
                      我的诅咒装备不可能这
                    </p>
                    <p class="rank-list-info-right-subtitle">
                      这是一个由装备决定人生的世界 ...
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Indexlist6',

  data: function () {
    return {
      cur: 0
    }
  }
}
</script>

<style>
.rank-list {
    border-top: 1px solid #F4F4F4;
    margin-top: 10px;
    background-color: #fff;
    font-size: 0;
    overflow-x: auto;
}
.rank-list.index {
    padding-bottom: 20px;
    margin-top: 0;
}
.rank-list.index .swiper-slide {
    width: 92%;
}
.main1{
  transform: translate3d(0px,0px,0px);
}
.main2{
  transform: translate3d(-345px,0px,0px);
}
.main3{
  transform: translate3d(-690px,0px,0px);
}
.main4{
  transform: translate3d(-1050px,0px,0px);
}
.rank-list li {
    border-bottom: 1px dashed #F4F4F4;
    position: relative;
    overflow: hidden;
    height: 70px;
    margin: 0 10px;
}
.rank-list-cover {
    position: absolute;
    top: 10px;
    left: 0px;
    width: 96px;
    height: 60px;
    overflow: hidden;
}
.rank-list-cover-img {
    width: 96px;
}
.rank-list-info {
    padding-left: 115px;
    overflow: hidden;
}
.rank-list.index .rank-list-info {
    padding-left: 80px;
}
.rank-list-info-left {
    position: absolute;
    left: 112px;
    top: 0;
}
.rank-list-info-left-index {
    background: #F7F7F7;
    border: 1px solid #EDEDED;
    font-size: 15px;
    color: #666666;
    letter-spacing: 0;
    height: 20px;
    line-height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 11px;
    display: inline-block;
    margin-top: 16px;
}
.rank-list-info-left-index.top-1 {
    background: #FEDA00;
    border: 1px solid #FFCE00;
    color: #fff;
}
.rank-list-info-left-index.top-2 {
    background: #FEAF00;
    border: 1px solid #FF9900;
    color: #fff;
}
.rank-list-info-left-index.top-3 {
    background: #FE8F00;
    border: 1px solid #FE7100;
    color: #fff;
}
.rank-list-info-right {
    margin-left: 30px;
}
.rank-list-info-right-title {
    font-size: 14px;
    color: #252525;
    letter-spacing: 0;
    margin-top: 16px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.rank-list-info-right-subtitle {
    font-size: 13px;
    color: #999;
    letter-spacing: 0;
    margin-top: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
