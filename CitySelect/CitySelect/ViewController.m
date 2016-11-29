//
//  ViewController.m
//  CitySelect
//
//  Created by LuzhiChao on 16/11/29.
//  Copyright © 2016年 LuzhiChao. All rights reserved.
//

#import "ViewController.h"
#import "CitySelectView.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIButton *citySelectBtn;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
}
- (IBAction)selectCity:(id)sender {
    
    CitySelectView *cityView = [[CitySelectView alloc]initWithFrame:CGRectMake(0, 100, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height-100) provinceFrame:CGRectMake(0, 0, 100, 300) cityFrame:CGRectMake(100, 0, [UIScreen mainScreen].bounds.size.width-100, 300)];
    __weak typeof(self)weakSelf = self;
    cityView.passCityBlock = ^(NSString *selectCity) {
        // 赋值
        [weakSelf.citySelectBtn setTitle:selectCity forState:UIControlStateNormal];
    };
    [self.view addSubview:cityView];
    
}


@end
