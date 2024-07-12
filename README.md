baseurl:http://127.0.0.1:3007/

用户接口：
```js
//注册用户
http://127.0.0.1:3007/mcdl/newuser
POST
headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
//必传参数：username，password
```
```js
//登录
http://127.0.0.1:3007/mcdl/login
POST
headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
//必传参数：username，password
```

食物分类
```js
//获取食物分类
http://127.0.0.1:3007/mcdl/foods/category
GET
```
食物接口：
```js
//获取食物
http://127.0.0.1:3007/mcdl/foodsList/${query} // query: 'hamburgers','beverage','snacks','desserts','breakfast'
GET
```
```js
//获取食物细节
http://127.0.0.1:3007/foodsdetail/${id}
GET
```
购物车接口：
```js
//添加购物车
    url: `/my/addcart`,
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      id,       //必需
      name,     //必需
      num,      //必需
      price,    //必需
      imgurl    //必需
    }
```
```js
//获取购物车
GET
    url: '/my/getcart',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
```
```js
//删除购物车
    url: '/my/deletecart',
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: { id }       //必需
```
```js
//更新购物车
    url: '/my/updatecart',
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: { id, num }  //必需
```
```js
//清空购物车
    url: '/mcdl/clearcart',
    method: 'POST'
```
订单接口
```js
//添加订单
    url: `/my/addorder`,
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      id,    //必需
      name,  //必需
      price  //必需
    }
```
```js
GET
//获取订单
    url: '/my/getorder',
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
```
