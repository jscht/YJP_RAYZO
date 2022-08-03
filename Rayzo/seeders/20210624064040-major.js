'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('majors',[
      {
        course: "데이터베이스 관리자 / 데이터베이스 응용프로그램 개발 전문가",
        introduce: "DBMS(Oracle, MSSQL, DB2, MySQL, Altibase, Tibero 등) 운용 관리 능력 SQL 작성 및 DB 모델링 능력",
        createdAt: new Date(),
        updatedAt: new Date(),
        className: "icon fa-paper-plane"
      },
      {
        course: "웹 솔루션 개발자",
        introduce: "JSP, ASP, PHP, Ajax, JavaScript, jQuery, jQuery Mobile 기반 웹 솔루션 개발 능력 배양, MVC 기반, 프레임워크(Struts, Spring, iBatis) 기반 솔루션 개발 능력 배양",
        createdAt: new Date(),
        updatedAt: new Date(),
        className: "icon solid fa-laptop"
      },
      {
        course: "모바일 및 IoT 개발자",
        introduce: "안드로이드 기반, iOS 기반의 스마트 폰과 태블릿 PC용 애플리케이션 개발 능력",
        createdAt: new Date(),
        updatedAt: new Date(),
        className: "icon solid fa-code"
      },
      {
        course: "웹2.0 기반의 실무형 웹 솔루션 개발자 양성",
        introduce: "기업과 조직의 다양하고 방대한 데이터를 통합 관리하는 데이터베이스 관리자, 데이터베이스 응용프로그램 개발자 양성",
        createdAt: new Date(),
        updatedAt: new Date(),
        className: "icon fa-flag"
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('majors', null, {});
  }
};
