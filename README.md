# CitySelectView
二级城市选择，自定义view

![License MIT](https://go-shields.herokuapp.com/license-MIT-blue.png)
![Platform info](http://img.shields.io/cocoapods/p/YTKKeyValueStore.svg?style=flat)
## 实例

![演示效果](http://7xt7mf.com1.z0.glb.clouddn.com/%E5%9F%8E%E5%B8%82%E9%80%89%E6%8B%A9.gif?imageMogr2/auto-orient/strip%7CimageView2/4/w/400)

## 用法

导入CitySelectView

```
CitySelectView *cityView = [[CitySelectView alloc]initWithFrame:CGRectMake(0, 100, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height-100) provinceFrame:CGRectMake(0, 0, 100, 300) cityFrame:CGRectMake(100, 0, [UIScreen mainScreen].bounds.size.width-100, 300)];
    __weak typeof(self)weakSelf = self;
    cityView.passCityBlock = ^(NSString *selectCity) {
        // 赋值
        [weakSelf.citySelectBtn setTitle:selectCity forState:UIControlStateNormal];
    };
    [self.view addSubview:cityView];
```
## 说明
项目中用到的一个小功能，觉得有点用的请给个star。qq:1185907688

