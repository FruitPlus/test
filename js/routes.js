angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom'); //兼容安卓tabs
  $ionicConfigProvider.navBar.alignTitle('center'); //兼容安卓navbar
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('tabs', {
    abstract: true,
    // url:'tabs',
    templateUrl: 'templates/tabs.html',
  })

  // 豌豆首页
  .state('tabs.peasIndex', {
    url: '/peasIndex',
    views: {
      'index-view': {
        templateUrl: 'templates/peasIndex.html'
      }
    }
  })

  // 自助服务
  .state('tabs.selfService', {
    url: '/selfService',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService.html'
      }
    }
  })


 // 电费充值
  .state('tabs.electricity', {
    url: '/electricity',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/electricity.html'
      }
    }
  })

  // 水费充值
  .state('tabs.water', {
    url: '/water',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/water.html'
      }
    }
  })

  // 退房结算查询
  .state('tabs.checkOutCheck', {
    url: '/checkOutCheck',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/checkOutCheck.html'
      }
    }
  })


// 付款
  .state('tabs.payment', {
    url: '/payment',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/payment.html'
      }
    }
  })

  // 已付账单查询
  .state('tabs.paybills', {
    url: '/paybills',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/paybills.html'
      }
    }
  })

// 付款计划
  .state('tabs.paymentPlan', {
    url: '/paymentPlan',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/paymentPlan.html'
      }
    }
  })

  // 申请退房
  .state('tabs.checkOut', {
    url: '/checkOut',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/checkOut.html'
      }
    }
  })

   // 水电用量查询
  .state('tabs.WandE', {
    url: '/WandE',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/WandE.html'
      }
    }
  })

  // 申请转租
  .state('tabs.sublet', {
    url: '/sublet',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/sublet.html'
      }
    }
  })

  // 门卡挂失
  .state('tabs.reportCard', {
    url: '/reportCard',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/reportCard.html'
      }
    }
  })

  // 网上投诉
  .state('tabs.complaint', {
    url: '/complaint',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/complaint.html'
      }
    }
  })

  // 报修
  .state('tabs.repair', {
    url: '/repair',
    views: {
      'selfService-view': {
        templateUrl: 'templates/selfService/repair.html'
      }
    }
  })

  // 社区活动
  .state('tabs.community', {
    url: '/community',
    views: {
      'community-view': {
        templateUrl: 'templates/community.html'
      }
    }
  })

  // 会员信息
  .state('tabs.members', {
    url: '/members',
    views: {
      'members-view': {
        templateUrl: 'templates/members.html'
      }
    }
  })

 // 个人信息
  .state('tabs.personal', {
    url: '/personal',
    views: {
      'members-view': {
        templateUrl: 'templates/member/personal.html'
      }
    }
  })
  
  // 服务价目表
  .state('tabs.priceList', {
    url: '/priceList',
    views: {
      'members-view': {
        templateUrl: 'templates/member/priceList.html'
      }
    }
  })

  // 服务价目表
  .state('tabs.leaseContract', {
    url: '/leaseContract',
    views: {
      'members-view': {
        templateUrl: 'templates/member/leaseContract.html'
      }
    }
  })

 // 附加协议
  .state('tabs.additional', {
    url: '/additional',
    views: {
      'members-view': {
        templateUrl: 'templates/member/additional.html'
      }
    }
  })

  // 租客守则
  .state('tabs.tenantCode', {
    url: '/tenantCode',
    views: {
      'members-view': {
        templateUrl: 'templates/member/tenantCode.html'
      }
    }
  })

  // 证件信息
  .state('tabs.document', {
    url: '/document',
    views: {
      'members-view': {
        templateUrl: 'templates/member/document.html'
      }
    }
  })

  // 职业信息
  .state('tabs.career', {
    url: '/career',
    views: {
      'members-view': {
        templateUrl: 'templates/member/career.html'
      }
    }
  })

   // 教育讯息
  .state('tabs.educational', {
    url: '/educational',
    views: {
      'members-view': {
        templateUrl: 'templates/member/educational.html'
      }
    }
  })
 
$urlRouterProvider.otherwise('/peasIndex')

  

});