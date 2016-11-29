//
//  CityPickerProvince.m
//  二级城市选择
//
//  Created by LuzhiChao on 16/11/29.
//  Copyright © 2016年 LuzhiChao. All rights reserved.
//

#import "CityPickerProvince.h"

@implementation CityPickerProvince

- (id)initWithDict:(NSDictionary *)dict {
    
    if (self = [super init]) {
        self.name = dict[@"name"];
        self.cities = dict[@"cities"];
    }
    return self;
}

+ (id)provinceWithDict:(NSDictionary *)dict {
    return [[self alloc] initWithDict:dict];
}
@end
