'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('teams',[
      {
        member: "권봉식 / Front end / Team Leader",
        introduce: "안녕하세요 이번 조별과제에서 프론트엔드와 ppt 맡게된 권봉식입니다. 이번 프로젝트를 하며 많은 많은 시행착오와 갈등상황이 많았고, 저도 많이 부족하다는 것을 많이 느꼈습니다. 하지만 조원들과 함께 힘을 합쳐 프로젝트를 완성할 수 있게 되었다고 생각합니다. 감사합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
        imag: "images/kwon.jpg"
      },
      {
        member: "김정인 / Full stack / Designer",
        introduce: "이번 팀프로젝트의 풀스택을 맡게 된 김정인입니다. 프로젝트를 하며 많은 갈등상황과 문제상황을 겪으며 양한 상황에 대처해 보는 시간을 가진 것 같습니다. 시간이 촉박해 백과 프론트 두 과정을 번갈아 밤을 새며 완전하지는 않지만 여러 지식들과 이 과목에 대한 흥미가 생긴 것 같아 좋은 경험이였습니다! 이번 팀프로젝트 과제를 내주신 김종율 교수님께 감사드립니다!",
        createdAt: new Date(),
        updatedAt: new Date(),
        imag: "images/kim.jpg"
      },
      {
        member: "박준석 / Back end / DB Manager",
        introduce: "반갑습니다. 21년도 노드 프로젝트에서 백엔드와 DB 매니지먼트를 맡은 박준석입니다. 여유치않은 시간과 여러가지 힘든 일도 있었지만 잘 이겨내준 팀원에게 감사하다는 말 부터 하고 싶습니다. 제가 한것은 사실상 백엔드쪽 길을 조금 닦아 놓은 정도밖에 없었지만 그것밖에 안되더라도 잘 따라와준 팀원들에게 또 한번 감사하다는 말을 올립니다. 고생하셨습니다!!",
        createdAt: new Date(),
        updatedAt: new Date(),
        imag: "images/park.jpg"
      },
      {
        member: "마덕영 / Front end / Designer",
        introduce: "21년 1학기 자바스크립트 기말과제에 프론트로 참여하게 된 마덕영입니다. 팀플은 처음이라 이런저런 걱정들이 많았는데, 조원들을 믿고 열심히 한 결과가 좋게 나온 것 같아 안심이 됩니다. 더 노력해서 성장한 사람이 되겠습니다. 감사합니다!",
        createdAt: new Date(),
        updatedAt: new Date(),
        imag: "images/ma.jpg"
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teams', null, {});
  }
};
