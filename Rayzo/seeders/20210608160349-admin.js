'use strict';
// seed를 하기 전에 migrate를 먼저 실행해야 한다
// 테이블의 필드가 정의되어 있어야 seed를 할 수 있기 때문

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 관리자 생성
    await queryInterface.bulkInsert('users',[
      {
        name: "Bongsik",
        email: "bongstar@bong.com",
        password: "042ed4e1e43b48c3cfeda7010def2e572057bfd93b947f597f2b24ecbb2747fbe99beb1d629eb92b1d0df3d5cd11b07adef9a37fd10de82b81fde9de3efd5d8a", 
                  // bongstar
        salt: "1618250317485",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jeongin",
        email: "jik@jik.com",
        password: "4eacfee126e4608b90cf72a10d6bab14deb81945d73b549f60a97b1efdb02bc127e6e1e6f8de10eb24ccbb7637fcfbad0b91ba7191941644118e05d008d1df49",  
                  // jik
        salt: "1355201373781",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Junseok",
        email: "jsc@jsc.com",
        password: "c014a1da7884c7013cf0ed76aead9b086d348a0a97cdc2609dadb1819f53e0bf70fa83906969a1b09d3e258b97f82c200b542e7742063af987764baef05b1347",  
                  // jsc
        salt: "239173050806",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Deokyeong",
        email: "mupeon@mu.com",
        password: "c354be1e02a8dd7235c8aa76b91208ae46170b412f7f6705f7729b934286fc0cc6faa2dbf8ff63acf436219da9d2fac873580d68224bf0aa44cc329e638d539a",   
                  // mupeon
        salt: "676726144398",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
