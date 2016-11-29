//
//  CityPickerProvince.h
//  二级城市选择
//
//  Created by LuzhiChao on 16/11/29.
//  Copyright © 2016年 LuzhiChao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CityPickerProvince : NSObject

@property (nonatomic, copy) NSString *name;
@property (nonatomic, strong) NSArray *cities;

- (id)initWithDict:(NSDictionary *)dict;
+ (id)provinceWithDict:(NSDictionary *)dict;

@end
