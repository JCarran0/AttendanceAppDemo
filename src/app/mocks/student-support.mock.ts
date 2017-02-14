import { StudentSupport } from './../services/student-support.service';

export const StudentSupportMocks: StudentSupport[] = [
  {
    _id: 'a5c961be-83f0-11e6-ae22-56b6b6499611',
    schoolId: '13W320',
    student: {
      studentId: '80000000113W320',
      lastFirst: 'Musk, Elron'
    },
    assignedOn: '2016-08-24',
    startsOn: '2016-10-15',
    reviewOn: [
      '2016-11-15',
      '2016-12-15'
    ],
    assignedBy: {
      userId: 'DOE-777',
      firstName: 'Fancy',
      lastName: 'Pantalones',
      preferredEmail: '13w320-delegated-school-admin@myschool.edu',
      gafeEmail: null,
      doeEmail: 'myDoeEmail@schoolz.nyc.org'
    },
    status: 'ACTIVE',
    support: {
      supportId: '2f9ee5f4-83f0-11e6-ae22-56b6b6499611',
      name: 'Mr. Yu-Ramos` 3X Algebra Prep',
      category: 'REGENTS_PREP',
      metaData: {
        examSubject: 'alg'
      }
    },
    initialPrimaryOutcomeMetrics: [
      {
        studentPath: 'regentsDetails.byCategory9.ela.maxScore',
        value: 54
      }
    ]
  },
  {
    _id: 'a5c961be-83f0-11e6-ae22-56b6b6499611',
    schoolId: '13W320',
    student: {
      studentId: '80000000113W320',
      lastFirst: 'Jasper, Julie'
    },
    assignedOn: '2016-08-24',
    startsOn: '2016-10-15',
    reviewOn: [
      '2016-11-15',
      '2016-12-15'
    ],
    assignedBy: {
      userId: 'DOE-777',
      firstName: 'Fancy',
      lastName: 'Pantalones',
      preferredEmail: '13w320-delegated-school-admin@myschool.edu',
      gafeEmail: null,
      doeEmail: 'myDoeEmail@schoolz.nyc.org'
    },
    status: 'ACTIVE',
    support: {
      supportId: '2f9ee5f4-83f0-11e6-ae22-56b6b649961X',
      name: 'ELA Prep',
      category: 'REGENTS_PREP',
      metaData: {
        examSubject: 'alg'
      }
    },
    initialPrimaryOutcomeMetrics: [
      {
        studentPath: 'regentsDetails.byCategory9.ela.maxScore',
        value: 54
      }
    ]
  }
];
