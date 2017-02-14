import { Support } from './../services/supports.service';

export const MockSupports: Support[] = [
  {
    '_id': '2f9ee5f4-83f0-11e6-ae22-56b6b6499611',
    'schoolId': '13W320',
    'category': 'REGENTS_PREP',
    'name': 'Mr. Yu-Ramos` 3X Algebra Prep',
    'description': 'Prepping test takers to pass Algebra Regents',
    'createdBy': {
      'userId': 'DOE-777',
      'firstName': 'Fancy',
      'lastName': 'Pantalones',
      'preferredEmail': '13w320-delegated-school-admin@myschool.edu',
      'gafeEmail': null,
      'doeEmail': 'myDoeEmail@schoolz.nyc.org'
    },
    'location': 'Room 204',
    'schedule': {
      'repeats': 'WEEKLY',
      'repeatsEvery': 1,
      'repeatsBy': 'NONE',
      'repeatsOn': {
        'monday': true,
        'tuesday': false,
        'wednesday': true,
        'thursday': false,
        'friday': true,
        'saturday': false,
        'sunday': false
      },
      'startsOn': '2016-09-01',
      'endsOn': '2017-01-10',
      'startTime': '2:45 pm',
      'endTime': '3:45 pm'
    },
    'activityLead': {
      'userId': 'DOE-777',
      'firstName': 'Fancy',
      'lastName': 'Pantalones',
      'preferredEmail': '13w320-delegated-school-admin@myschool.edu',
      'gafeEmail': null,
      'doeEmail': 'myDoeEmail@schoolz.nyc.org'
    },
    'primaryOutcomeMetrics': [
      'regentsDetails.byCategory9.alg.maxScore'
    ],
    'metaData': {
      'examSubject': 'alg'
    }
  },
  {
    '_id': '2f9ee5f4-83f0-11e6-ae22-56b6b6499611',
    'schoolId': '13W320',
    'category': 'REGENTS_PREP',
    'name': 'ELA Prep',
    'description': 'Prepping test takers to pass Algebra Regents',
    'createdBy': {
      'userId': 'DOE-777',
      'firstName': 'Fancy',
      'lastName': 'Pantalones',
      'preferredEmail': '13w320-delegated-school-admin@myschool.edu',
      'gafeEmail': null,
      'doeEmail': 'myDoeEmail@schoolz.nyc.org'
    },
    'location': 'Room 204',
    'schedule': {
      'repeats': 'WEEKLY',
      'repeatsEvery': 1,
      'repeatsBy': 'NONE',
      'repeatsOn': {
        'monday': false,
        'tuesday': false,
        'wednesday': false,
        'thursday': false,
        'friday': false,
        'saturday': true,
        'sunday': false
      },
      'startsOn': '2016-09-01',
      'endsOn': '2017-01-10',
      'startTime': '2:45 pm',
      'endTime': '3:45 pm'
    },
    'activityLead': {
      'userId': 'DOE-777',
      'firstName': 'Fancy',
      'lastName': 'Pantalones',
      'preferredEmail': '13w320-delegated-school-admin@myschool.edu',
      'gafeEmail': null,
      'doeEmail': 'myDoeEmail@schoolz.nyc.org'
    },
    'primaryOutcomeMetrics': [
      'regentsDetails.byCategory9.ela.maxScore'
    ],
    'metaData': {
      'examSubject': 'alg'
    }
  }
];
