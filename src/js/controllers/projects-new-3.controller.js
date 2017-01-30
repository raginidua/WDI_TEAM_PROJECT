angular
  .module('teamBuilder')
  .controller('ProjectsNew3Ctrl', ProjectsNew3Ctrl);

ProjectsNew3Ctrl.$inject = ['CurrentProjectService'];
function ProjectsNew3Ctrl(CurrentProjectService){
  const vm = this;
  console.log('ProjectsNew3Ctrl');
  vm.currentProject = CurrentProjectService.getProject();
  vm.roles = [
    'Android Developers',
    'iOS Developers',
    'Project Mangers',
    'Marketers',
    'Data Scientists',
    'Backend Developers',
    'Frontend Developers',
    'UI Designers',
    'UX Desingers'
  ];
}
