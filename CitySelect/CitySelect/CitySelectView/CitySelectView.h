//
//  CitySelectView.h
//  二级城市选择
//
//  Created by LuzhiChao on 16/11/29.
//  Copyright © 2016年 LuzhiChao. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CitySelectView : UIView

@property (nonatomic, copy) void (^passCityBlock) (NSString *selectCity);

- (instancetype)initWithFrame:(CGRect)frame provinceFrame:(CGRect)provinceFrame cityFrame:(CGRect)cityFrame;

@end
