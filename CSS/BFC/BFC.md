
## 触发BFC
html 根元素
float 浮动
绝对定位
overflow 不为 visiable
display 为表格布局或者弹性布局
## BFC 特性：
内部box会在垂直方向，一个接一个地放置。
Box垂直方向的距离由margin决定，在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠。
在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘）
形成了BFC的区域不会与float box重叠
计算BFC高度时，浮动元素也参与计算
## BFC作用：
清除外边距折叠
防止浮动元素覆盖
清楚浮动