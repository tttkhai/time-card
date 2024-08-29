import axios from 'axios';

const API_URL = 'https://wookie.codesubmit.io/time-tracking';

export const fetchTimeTrackingData = async () => {
//   try {
//     const response = await axios.get(API_URL, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log('API Response:', response.data); // Log the response data
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error); // Log the error details
//     throw error;
//   }

    return [
        {
            "timeframes": {
                "daily": {
                    "current": 5,
                    "previous": 7
                },
                "monthly": {
                    "current": 103,
                    "previous": 128
                },
                "weekly": {
                    "current": 32,
                    "previous": 36
                }
            },
            "title": "Work"
        },
        {
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 2
                },
                "monthly": {
                    "current": 23,
                    "previous": 29
                },
                "weekly": {
                    "current": 10,
                    "previous": 8
                }
            },
            "title": "Play"
        },
        {
            "timeframes": {
                "daily": {
                    "current": 0,
                    "previous": 1
                },
                "monthly": {
                    "current": 13,
                    "previous": 19
                },
                "weekly": {
                    "current": 4,
                    "previous": 7
                }
            },
            "title": "Study"
        },
        {
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 1
                },
                "monthly": {
                    "current": 11,
                    "previous": 18
                },
                "weekly": {
                    "current": 4,
                    "previous": 5
                }
            },
            "title": "Exercise"
        },
        {
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 3
                },
                "monthly": {
                    "current": 21,
                    "previous": 23
                },
                "weekly": {
                    "current": 5,
                    "previous": 10
                }
            },
            "title": "Social"
        },
        {
            "timeframes": {
                "daily": {
                    "current": 0,
                    "previous": 1
                },
                "monthly": {
                    "current": 7,
                    "previous": 11
                },
                "weekly": {
                    "current": 2,
                    "previous": 2
                }
            },
            "title": "Self Care"
        }
    ]
};
