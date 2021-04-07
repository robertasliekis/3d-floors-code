const floorsData = [
  {
    description: "Classroom facilities",
    rooms: [
      {
        name: "110 - Classroom",
        description:
          "A room used by regularly scheduled classes that does not require special-purpose equipment and which commonly is used by more than one discipline. These classrooms are centrally scheduled."
      },
      {
        name: "111 - Assigned Classroom",
        description:
          "Assigned Classroom: A room with standard classroom furniture and equipment that is scheduled by a department or other academic unit."
      },
      {
        name: "112 - Computer Classroom",
        description:
          "A classroom with a computer at every student station as well as the instructor station configured so that each station can see the instructional display screen simultaneously with their own desktop screen. Computer classrooms are locked for security when not in use for scheduled courses."
      },
      {
        name: "115 - Computer Lab",
        description:
          "A space intended to provide students access to computers for individual or group work on a non-scheduled (drop-in) or event-scheduled basis. While computer labs may be used for some scheduled course instruction, the room and its resources must be accessible for other individual or instructional use at non-class times."
      },
      {
        name: "116 - Breakout Room",
        description:
          "A room used by regularly scheduled classes as an adjunct to the primary classroom for small group discussion/active learning activities occurring during the regularly scheduled meeting for the course."
      },
      {
        name: "140 - Remote Classroom",
        description:
          "A room with standard classroom furniture and equipment that is typically scheduled by a department or other academic unit due to its location off the main Seattle, Bothell or Tacoma campuses which restricts its use in general scheduling."
      }
    ]
  },
  {
    description: "Labaratory facilities",
    rooms: [
      {
        name: "210 - Class Laboratory",
        description:
          "A specially designed or equipped room used primarily for group instruction in regularly scheduled classes that requires special-purpose equipment for student participation, experimentation, observation, or practice in a particular field of study. These rooms are scheduled by a department or other academic unit."
      },
      {
        name: "211 - General Class Lab",
        description:
          "A specially designed or equipped room used primarily for group instruction in regularly scheduled classes that requires special-purpose equipment for student participation, experimentation, observation, or practice in several related fields of study. These rooms are centrally scheduled."
      },
      {
        name: "212 - Restricted Class Lab",
        description:
          "A specially designed or equipped room used for group instruction but restricted to a small number of courses by project work in progress, by the nature of equipment and materials, or by location."
      },
      {
        name: "220 - Open Lab",
        description:
          " A space intended to provide students access to specialized equipment (excluding computers) for individual or group work on a non-scheduled (drop-in) or event-scheduled basis. While open labs may be used for some scheduled course instruction, the room and its resources must be accessible for other individual or instructional use at non-class times."
      }
    ]
  },
  {
    description: "Office facilities",
    rooms: [
      {
        name: "311 - Faculty Office",
        description: "A room used by instructional and research faculty in an office (i.e., working at a desk or table)."
      },
      {
        name: "312 - Dean/Chair/Director Office",
        description:
          "A room used by personnel engaged in the planning, management and operation of the academic and/or business affairs of the institution, college or department, including offices of the dean, chairpersons, central administration and directors."
      },
      {
        name: "313 - Student Office",
        description:
          "A room used by students (working at a desk or table), Including teaching and research assistants, trainees, student activity assistants, counseling assistants, curator assistant, non-medical intern, etc."
      },
      {
        name: "314 - Clerical Office",
        description:
          "A room used primarily by secretarial and clerical staff (working at a desk or table), as well as general office space where files, office machines, or reception space is in the same room with clerical personnel."
      },
      {
        name: "316 - Prostaff Office",
        description:
          "A room used by academic or administrative staff, other than directors of units, including offices of accountants, architects, assistants to directors, coordinators, graphic artists, advisors, managers, etc."
      }
    ]
  },
  {
    description: "Study facilities",
    rooms: [
      {
        name: "410 - Study Room",
        description:
          "A room located in a campus library used by individuals to study books or audio-visual materials, including reading rooms, carrels, study booths, etc., intended for general study purposes."
      },
      {
        name: "412 - Non-Library Study Room",
        description: "A room located in areas, not assigned to libraries, that individuals use to study at their convenience."
      },
      {
        name: "420 - Collections",
        description: "A room or portion of a room in a campus library used to provide shelving for library or audio-visual materials."
      },
      {
        name: "430 - Open-Stack Study Room",
        description: "A combination study space and stack, generally without physical boundaries between the stack and study areas."
      }
    ]
  },
  {
    description: "Special-use facilities",
    rooms: [
      {
        name: "520 - Athletic Facilities",
        description:
          "A room or area used by students, staff, or the public for athletic activities, including gymnasiums, ball courts, wrestling rooms, indoor tracks, swimming pools, etc."
      },
      {
        name: "523 - Spectator Seating",
        description: "The seating area used by students, staff, or the public to watch athletic events."
      },
      {
        name: "530 - Media Production",
        description:
          "A room or group of rooms used for the production and distribution of audio/visual, radio and television materials for the operation of equipment for communication of these materials, including sound and graphics studios and similar rooms."
      },
      {
        name: "540 - Clinic",
        description:
          " A room used for the diagnosis and/or treatment of patients in a program other than medicine, dentistry, and student health care; includes psychology, speech and hearing, remedial reading clinics, etc."
      },
      {
        name: "550 - Demonstration",
        description:
          "A room or group of rooms used to practice the principles of certain disciplines of teaching, including demonstration schools and preschool nurseries if they support the training of college students as teachers."
      }
    ]
  }
];

export default floorsData;
