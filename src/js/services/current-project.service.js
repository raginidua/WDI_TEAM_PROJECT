angular
.module('teamBuilder')
.service('CurrentProjectService', CurrentProjectService);

CurrentProjectService.$inject = [];
function CurrentProjectService() {
  const  self = this;

  return {
    getProject: function () {
      return self.project;
    },
    setProject: function(value) {
      self.project = value;
    }
  };
}
