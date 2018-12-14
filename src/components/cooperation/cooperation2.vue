<template>
  <div class="about3 auto-width">
    <div class="sub-title">
      <span>合作伙伴</span>
    </div>
    <div class="cooperation-wrap">
      <ul class="clearfix" >
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/1.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/2.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/3.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/4.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/5.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/6.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/7.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/8.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/9.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/10.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/11.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/12.jpg" alt="">
          </div>
        </li>
        
        <li class="item ll">
            <div class="img-wrap">
              <span>zh中房集团成都房地产开发有限公司</span>
            </div>
          </li>
          <li class="item ll">
            <div class="img-wrap">
              <span>四川省合丰置业发展有限责任公司</span>
            </div>
          </li>
          <li class="item ll">
            <div class="img-wrap">
              <span>成都智远金益房地产开发有限公司</span>
            </div>
          </li>
          <li class="item ll">
            <div class="img-wrap">
              <span>成都圣沅投资有限公司</span>
            </div>
          </li>
          <li class="item ll">
              <div class="img-wrap">
                <span>崇州天顺置业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都蓝润航瑞置业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>四川川出置业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>崇州市富邦皮革有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都市蜀州城市建设投资有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都合能兴进达房地产开发有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>四川省合丰置业发展有限责任公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>四川愿景实业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>大邑青禾置业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都市琉璃旅游投资开发有限责任公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都唐人街置业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都瑞熙合能房地产开发有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都泰江置业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>四川金联实业有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>成都瑞进合能房地产开发有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>四川恒昌房地产开发有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>四川华炜投资有限公司</span>
              </div>
            </li>
            <li class="item ll">
              <div class="img-wrap">
                <span>中海信和成都物业发展有限公司</span>
              </div>
            </li>
            <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/0.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/0.jpg" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Pagination from 'base/pagination/pagination.vue'
  import List1 from 'components/list1/list1.vue'
  

  export default {
    data() {
      return {
        pageSize: 10,
        jjjj: [
          {title:11},
          {title:22},
          {title:'这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试'},
          {title:44},
          {title:55}
        ],
      }
    },
    components: {
      Pagination,
      List1
    },
    methods: {
      setPage(current) {
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .cooperation-wrap {
      margin-bottom:50px;
      ul {
        width:960px;
        margin:0 auto;
        .item {
          cursor:pointer;
          margin:15px;
          transition:.3s;
          .img-wrap {
            box-shadow: 0 0 10px #eee;
            width:210px;
            height:140px;
            background:#fff;
            text-align: center;
            font-size:18px;
            font-weight: 700;
            color:#444;
            line-height:25px;
            overflow: hidden;
            span {
              padding:0 10px;
              margin-top:50px;
              display:block;
              box-sizing: border-box
            }
            img {
              width:100%;
            }
          }
        }
        .item:hover {
          box-shadow: 0 0 20px #ddd;
          transform: translate3d(0,-10px,0);
          transition:.3s;
        }
      }
    }
</style>
