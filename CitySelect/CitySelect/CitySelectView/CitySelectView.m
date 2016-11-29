//
//  CitySelectView.m
//  二级城市选择
//
//  Created by LuzhiChao on 16/11/29.
//  Copyright © 2016年 LuzhiChao. All rights reserved.
//

#import "CitySelectView.h"
#import "CityPickerProvince.h"
@interface CitySelectView ()<UITableViewDelegate, UITableViewDataSource, UIGestureRecognizerDelegate>

@property (nonatomic, strong) UITableView *provinceTable;//省
@property (nonatomic, strong) UITableView *cityTable;//市
@property (nonatomic, strong) NSMutableArray *provinceArray;//省数组
@property (nonatomic, strong) NSMutableArray *cityArray;//市数组
@property (nonatomic, assign) NSIndexPath *index;//记录点击的是哪个省

@end

@implementation CitySelectView

- (instancetype)initWithFrame:(CGRect)frame provinceFrame:(CGRect)provinceFrame cityFrame:(CGRect)cityFrame {
    if (self = [super initWithFrame:frame]) {
   
        UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(removeSelf)];
        tap.delegate = self;
        [self addGestureRecognizer:tap];
        
        _provinceTable = [[UITableView alloc]initWithFrame:provinceFrame style:UITableViewStylePlain];
        _provinceTable.delegate = self;
        _provinceTable.dataSource = self;
        [self addSubview:_provinceTable];
        
        NSArray *array = [NSArray arrayWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"cities.plist" ofType:nil]];
        _provinceArray = [NSMutableArray array];
        for (NSDictionary *dict in array) {
            CityPickerProvince *province = [CityPickerProvince provinceWithDict:dict];
            [_provinceArray addObject:province];
        }
        
        _cityTable = [[UITableView alloc]initWithFrame:cityFrame style:UITableViewStylePlain];
        _cityTable.delegate = self;
        _cityTable.dataSource = self;
        [self addSubview:_cityTable];

    }
    return self;
}

#pragma mark --UIGestureRecognizerDelegate
- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldReceiveTouch:(UITouch *)touch {

    if ([NSStringFromClass([touch.view class]) isEqualToString:@"UITableViewCellContentView"]) {
        return NO;
    }
    return YES;
}

- (void)removeSelf {
    [self removeFromSuperview];
}

#pragma mark -- UITableViewDataSource
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    if (tableView == _provinceTable) {
        
        static NSString *iden = @"province";
        UITableViewCell *provinceCell = [tableView dequeueReusableCellWithIdentifier:iden];
        if (!provinceCell) {
            provinceCell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleDefault reuseIdentifier:iden];
        }
        provinceCell.textLabel.text = [_provinceArray[indexPath.row]name];
        return provinceCell;
    }
    else {
        static NSString *iden = @"city";
        UITableViewCell *cityCell = [tableView dequeueReusableCellWithIdentifier:iden];
        if (!cityCell) {
            cityCell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleDefault reuseIdentifier:iden];
        }
        CityPickerProvince *provinces = _provinceArray[_index.row];
        cityCell.textLabel.text = provinces.cities[indexPath.row];
        return cityCell;
    }
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    if (tableView == _provinceTable) {
        return _provinceArray.count;
    }else
    {
        CityPickerProvince *provinces = _provinceArray[_index.row];
        return provinces.cities.count;
    }
}
#pragma mark -- UITableViewDelegate
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    if (tableView == _provinceTable) {
        _index = indexPath;
        [_cityTable reloadData];
    }else {
        [self removeFromSuperview];
        CityPickerProvince *provinces = _provinceArray[_index.row];
        if (self.passCityBlock) {
            self.passCityBlock(provinces.cities[indexPath.row]);
        }
    }
}
@end
