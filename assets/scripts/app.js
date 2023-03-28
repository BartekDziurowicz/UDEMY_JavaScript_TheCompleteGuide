class Tooltip {

}

class ProjectItem {

}

class ProjectList {
    constructor(type) {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}

App.init();