new Vue({
  el: '#app',
  data: {
    name: 'Edem Dorfe',
    course: 'Web Engineer Course',
    acceptancePeriod: 'October 2020',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'John Chief', course: 'Web Engineer Course', acceptancePeriod: 'October 2020' },
      { id: 2, name: 'Meklit Queen', course: 'Web Engineer Course', acceptancePeriod: 'October 2020' },
      { id: 3, name: 'Mahad Hashi', course: 'Web Engineer Course', acceptancePeriod: 'October 2020' }
    ]
  },
  methods: {
    addStudent: function() {
      var lastStudentPosition = this.students.length - 1;
      let id = this.students[lastStudentPosition].id + 1;
      let name = this.name
      let course = this.course
      let acceptancePeriod = this.acceptancePeriod
      this.students.push({ id,name, course, acceptancePeriod })
    }
  }
})
