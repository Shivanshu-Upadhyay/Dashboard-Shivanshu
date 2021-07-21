import React, { useState } from "react";

import { Form, Field } from "react-final-form";

import { ButtonGroup, Button } from "@material-ui/core";

import { addMotorData } from "../../../actions/motorExaminationAction";
import { connect } from "react-redux";

function Motor(props) {
    const [open, setOpen] = useState(0);
    const onSubmit = (formValues) => {
        const data = {
            date: formValues.date,
            spine: {
                cervical: formValues['cs'],
                thoraric: formValues['ts'],
                lumbar: formValues['ls']
            },
            cervical: {
                flexion: formValues['csflex'],
                extension: formValues['csextension'],
                sideFlexion: {
                    left: formValues['csflex-left'],
                    right: formValues['csflex-right']
                },
                rotation: {
                    left: formValues['csrota-left'],
                    right: formValues['csrota-right']
                }

            },
            thoraric: {
                flexion: formValues['thflex'],
                extension: formValues['thextension'],
                sideFlexion: {
                    left: formValues['thflex-left'],
                    right: formValues['thflex-right']
                },
                rotation: {
                    left: formValues['throta-left'],
                    right: formValues['throta-right']
                }

            },
            lumbar: {
                flexion: formValues['luflex'],
                extension: formValues['luextension'],
                sideFlexion: {
                    left: formValues['luflex-left'],
                    right: formValues['luflex-right']
                },
                rotation: {
                    left: formValues['lurota-left'],
                    right: formValues['lurota-right']
                }

            },



            hip: {
                flexionIliopsoas: {
                    left: {
                        row: formValues['hipflex-left'],
                        power: formValues['hipflex-left-power'],
                        tone: formValues['hipflex-left-tone']
                    },
                    right: {
                        row: formValues['hipflex-right'],
                        power: formValues['hipflex-right-power'],
                        tone: formValues['hipflex-right-tone']
                    }
                },
                flexionStartorius: {
                    left: {
                        row: formValues['hipflex2-left'],
                        power: formValues['hipflex2-left-power'],
                        tone: formValues['hipflex2-left-tone']
                    },
                    right: {
                        row: formValues['hipflex2-right'],
                        power: formValues['hipflex2-right-power'],
                        tone: formValues['hipflex2-right-tone']
                    }
                },
                flexionRectus: {
                    left: {
                        row: formValues['hipflex3-left'],
                        power: formValues['hipflex3-left-power'],
                        tone: formValues['hipflex3-left-tone']
                    },
                    right: {
                        row: formValues['hipflex3-right'],
                        power: formValues['hipflex3-right-power'],
                        tone: formValues['hipflex3-right-tone']
                    }
                },
                extensionGluteus: {
                    left: {
                        row: formValues['hipextension-left'],
                        power: formValues['hipextension-left-power'],
                        tone: formValues['hipextension-left-tone']
                    },
                    right: {
                        row: formValues['hipextension-right'],
                        power: formValues['hipextension-right-power'],
                        tone: formValues['hipextension-right-tone']
                    }
                },
                abductionGluteus: {
                    left: {
                        row: formValues['hipabduction-left'],
                        power: formValues['hipabduction-left-power'],
                        tone: formValues['hipabduction-left-tone']
                    },
                    right: {
                        row: formValues['hipabduction-right'],
                        power: formValues['hipabduction-right-power'],
                        tone: formValues['hipabduction-right-tone']
                    }
                },
                abductionTens: {
                    left: {
                        row: formValues['hipabduction2-left'],
                        power: formValues['hipabduction2-left-power'],
                        tone: formValues['hipabduction2-left-tone']
                    },
                    right: {
                        row: formValues['hipabduction2-right'],
                        power: formValues['hipabduction2-right-power'],
                        tone: formValues['hipabduction2-right-tone']
                    }
                },
                adductionAdductors: {
                    left: {
                        row: formValues['hipadduction-left'],
                        power: formValues['hipadduction-left-power'],
                        tone: formValues['hipadduction-left-tone']
                    },
                    right: {
                        row: formValues['hipadduction-right'],
                        power: formValues['hipadduction-right-power'],
                        tone: formValues['hipadduction-right-tone']
                    }
                },
                extRotation: {
                    left: {
                        row: formValues['hipext-left'],
                        power: formValues['hipext-left-power'],
                        tone: formValues['hipext-left-tone']
                    },
                    right: {
                        row: formValues['hipext-right'],
                        power: formValues['hipext-right-power'],
                        tone: formValues['hipext-right-tone']
                    }
                },
                intRotation: {
                    left: {
                        row: formValues['hipint-left'],
                        power: formValues['hipint-left-power'],
                        tone: formValues['hipint-left-tone']
                    },
                    right: {
                        row: formValues['hipint-right'],
                        power: formValues['hipint-right-power'],
                        tone: formValues['hipint-right-tone']
                    }
                },

            },


            knee: {
                flexionMed: {
                    left: {
                        row: formValues['kneeflex-left'],
                        power: formValues['kneeflex-left-power'],
                        tone: formValues['kneeflex-left-tone']
                    },
                    right: {
                        row: formValues['kneeflex-right'],
                        power: formValues['kneeflex-right-power'],
                        tone: formValues['kneeflex-right-tone']
                    }
                },
                flexionLat: {
                    left: {
                        row: formValues['kneeflex2-left'],
                        power: formValues['kneeflex2-left-power'],
                        tone: formValues['kneeflex2-left-tone']
                    },
                    right: {
                        row: formValues['kneeflex2-right'],
                        power: formValues['kneeflex2-right-power'],
                        tone: formValues['kneeflex2-right-tone']
                    }
                },
                flexionGracilius: {
                    left: {
                        row: formValues['kneeflex3-left'],
                        power: formValues['kneeflex3-left-power'],
                        tone: formValues['kneeflex3-left-tone']
                    },
                    right: {
                        row: formValues['kneeflex3-right'],
                        power: formValues['kneeflex3-right-power'],
                        tone: formValues['kneeflex3-right-tone']
                    }
                },
                extensionQuadriceps: {
                    left: {
                        row: formValues['kneeextension-left'],
                        power: formValues['kneeextension-left-power'],
                        tone: formValues['kneeextension-left-tone']
                    },
                    right: {
                        row: formValues['kneeextension-right'],
                        power: formValues['kneeextension-right-power'],
                        tone: formValues['kneeextension-right-tone']
                    }
                }
            },



            ankle: {
                flexionGastrocneius: {
                    left: {
                        row: formValues['ankleflex-left'],
                        power: formValues['ankleflex-left-power'],
                        tone: formValues['ankleflex-left-tone']
                    },
                    right: {
                        row: formValues['ankleflex-right'],
                        power: formValues['ankleflex-right-power'],
                        tone: formValues['ankleflex-right-tone']
                    }
                },
                flexionSoleus: {
                    left: {
                        row: formValues['ankleflex2-left'],
                        power: formValues['ankleflex2-left-power'],
                        tone: formValues['ankleflex2-left-tone']
                    },
                    right: {
                        row: formValues['ankleflex2-right'],
                        power: formValues['ankleflex2-right-power'],
                        tone: formValues['ankleflex2-right-tone']
                    }
                },
                flexionDorsi: {
                    left: {
                        row: formValues['ankleflex3-left'],
                        power: formValues['ankleflex3-left-power'],
                        tone: formValues['ankleflex3-left-tone']
                    },
                    right: {
                        row: formValues['ankleflex3-right'],
                        power: formValues['ankleflex3-right-power'],
                        tone: formValues['ankleflex3-right-tone']
                    }
                },
                inversion: {
                    left: {
                        row: formValues['ankleinversion-left'],
                        power: formValues['ankleinversion-left-power'],
                        tone: formValues['ankleinversion-left-tone']
                    },
                    right: {
                        row: formValues['ankleinversion-right'],
                        power: formValues['ankleinversion-right-power'],
                        tone: formValues['ankleinversion-right-tone']
                    }
                },
                eversion: {
                    left: {
                        row: formValues['ankleeversion-left'],
                        power: formValues['ankleeversion-left-power'],
                        tone: formValues['ankleeversion-left-tone']
                    },
                    right: {
                        row: formValues['ankleeversion-right'],
                        power: formValues['ankleeversion-right-power'],
                        tone: formValues['ankleeversion-right-tone']
                    }
                }
            },


            toes: {
                flexion: {
                    left: {
                        row: formValues['toesflex-left'],
                        power: formValues['toesflex-left-power'],
                        tone: formValues['toesflex-left-tone']
                    },
                    right: {
                        row: formValues['toesflex-right'],
                        power: formValues['toesflex-right-power'],
                        tone: formValues['toesflex-right-tone']
                    }
                },
                extension: {
                    left: {
                        row: formValues['toesextension-left'],
                        power: formValues['toesextension-left-power'],
                        tone: formValues['toesextension-left-tone']
                    },
                    right: {
                        row: formValues['toesextension-right'],
                        power: formValues['toesextension-right-power'],
                        tone: formValues['toesextension-right-tone']
                    }
                }
            },


            hallux: {
                flexionBrev: {
                    left: {
                        row: formValues['halluxflex-left'],
                        power: formValues['halluxflex-left-power'],
                        tone: formValues['halluxflex-left-tone']
                    },
                    right: {
                        row: formValues['halluxflex-right'],
                        power: formValues['halluxflex-right-power'],
                        tone: formValues['halluxflex-right-tone']
                    }
                },
                flexionLong: {
                    left: {
                        row: formValues['halluxflex2-left'],
                        power: formValues['halluxflex2-left-power'],
                        tone: formValues['halluxflex2-left-tone']
                    },
                    right: {
                        row: formValues['halluxflex2-right'],
                        power: formValues['halluxflex2-right-power'],
                        tone: formValues['halluxflex2-right-tone']
                    }
                },
                flexionExtLong: {
                    left: {
                        row: formValues['halluxflex3-left'],
                        power: formValues['halluxflex3-left-power'],
                        tone: formValues['halluxflex3-left-tone']
                    },
                    right: {
                        row: formValues['halluxflex3-right'],
                        power: formValues['halluxflex3-right-power'],
                        tone: formValues['halluxflex3-right-tone']
                    }
                }
            },


            scapula: {
                abduction: {
                    left: {
                        row: formValues['scaabduction-left'],
                        power: formValues['scaabduction-left-power'],
                        tone: formValues['scaabduction-left-tone']
                    },
                    right: {
                        row: formValues['scaabduction-right'],
                        power: formValues['scaabduction-right-power'],
                        tone: formValues['scaabduction-right-tone']
                    }
                },
                elevation: {
                    left: {
                        row: formValues['scaelevation-left'],
                        power: formValues['scaelevation-left-power'],
                        tone: formValues['scaelevation-left-tone']
                    },
                    right: {
                        row: formValues['scaelevation-right'],
                        power: formValues['scaelevation-right-power'],
                        tone: formValues['scaelevation-right-tone']
                    }
                },
                adductionTraps: {
                    left: {
                        row: formValues['scaadduction-left'],
                        power: formValues['scaadduction-left-power'],
                        tone: formValues['scaadduction-left-tone']
                    },
                    right: {
                        row: formValues['scaadduction-right'],
                        power: formValues['scaadduction-right-power'],
                        tone: formValues['scaadduction-right-tone']
                    }
                },
                depression: {
                    left: {
                        row: formValues['depress-left'],
                        power: formValues['depress-left-power'],
                        tone: formValues['depress-left-tone']
                    },
                    right: {
                        row: formValues['depress-right'],
                        power: formValues['depress-right-power'],
                        tone: formValues['depress-right-tone']
                    }
                },
                pain: {
                    left: {
                        row: formValues['pain-left'],
                        power: formValues['pain-left-power'],
                        tone: formValues['pain-left-tone']
                    },
                    right: {
                        row: formValues['pain-right'],
                        power: formValues['pain-right-power'],
                        tone: formValues['pain-right-tone']
                    }
                },
                adductionRhomboids: {
                    left: {
                        row: formValues['scaadduction-left'],
                        power: formValues['scaadduction-left-power'],
                        tone: formValues['scaadduction-left-tone']
                    },
                    right: {
                        row: formValues['scaadduction-right'],
                        power: formValues['scaadduction-right-power'],
                        tone: formValues['scaadduction-right-tone']
                    }
                }
            },


            elbow: {
                FlexionBiceps: {
                    left: {
                        row: formValues['eflex1-left'],
                        power: formValues['eflex1-left-power'],
                        tone: formValues['eflex1-left-tone']
                    },
                    right: {
                        row: formValues['eflex1-right'],
                        power: formValues['eflex1-right-power'],
                        tone: formValues['eflex1-right-tone']
                    }
                },
                flexion: {
                    left: {
                        row: formValues['eflex2-left'],
                        power: formValues['eflex2-left-power'],
                        tone: formValues['eflex2-left-tone']
                    },
                    right: {
                        row: formValues['eflex2-right'],
                        power: formValues['eflex2-right-power'],
                        tone: formValues['eflex2-right-tone']
                    }
                },
                extension: {
                    left: {
                        row: formValues['eextension-left'],
                        power: formValues['eextension-left-power'],
                        tone: formValues['eextension-left-tone']
                    },
                    right: {
                        row: formValues['eextension-right'],
                        power: formValues['eextension-right-power'],
                        tone: formValues['eextension-right-tone']
                    }
                }
            },



            foreArm: {
                supinationBiceps: {
                    left: {
                        row: formValues['fsupination-left'],
                        power: formValues['fsupination-left-power'],
                        tone: formValues['fsupination-left-tone']
                    },
                    right: {
                        row: formValues['fsupination-right'],
                        power: formValues['fsupination-right-power'],
                        tone: formValues['fsupination-right-tone']
                    }
                },
                supinationSupinator: {
                    left: {
                        row: formValues['fsupination2-left'],
                        power: formValues['fsupination2-left-power'],
                        tone: formValues['fsupination2-left-tone']
                    },
                    right: {
                        row: formValues['fsupination2-right'],
                        power: formValues['fsupination2-right-power'],
                        tone: formValues['fsupination2-right-tone']
                    }
                },
                pronation: {
                    left: {
                        row: formValues['fpronation-left'],
                        power: formValues['fpronation-left-power'],
                        tone: formValues['fpronation-left-tone']
                    },
                    right: {
                        row: formValues['fpronation-right'],
                        power: formValues['fpronation-right-power'],
                        tone: formValues['fpronation-right-tone']
                    }
                }
            },


            shoulder: {
                flexion: {
                    left: {
                        row: formValues['shflex-left'],
                        power: formValues['shflex-left-power'],
                        tone: formValues['shflex-left-tone']
                    },
                    right: {
                        row: formValues['shflex-right'],
                        power: formValues['shflex-right-power'],
                        tone: formValues['shflex-right-tone']
                    }
                },
                extension: {
                    left: {
                        row: formValues['shextension-left'],
                        power: formValues['shextension-left-power'],
                        tone: formValues['shextension-left-tone']
                    },
                    right: {
                        row: formValues['shextension-right'],
                        power: formValues['shextension-right-power'],
                        tone: formValues['shextension-right-tone']
                    }
                },
                abductionSupra: {
                    left: {
                        row: formValues['shabduction-left'],
                        power: formValues['shabduction-left-power'],
                        tone: formValues['shabduction-left-tone']
                    },
                    right: {
                        row: formValues['shabduction-right'],
                        power: formValues['shabduction-right-power'],
                        tone: formValues['shabduction-right-tone']
                    }
                },
                abductionDeltoid: {
                    left: {
                        row: formValues['shabduction2-left'],
                        power: formValues['shabduction2-left-power'],
                        tone: formValues['shabduction2-left-tone']
                    },
                    right: {
                        row: formValues['shabduction2-right'],
                        power: formValues['shabduction2-right-power'],
                        tone: formValues['shabduction2-right-tone']
                    }
                },
                adductionDelt: {
                    left: {
                        row: formValues['shadduction-left'],
                        power: formValues['shadduction-left-power'],
                        tone: formValues['shadduction-left-tone']
                    },
                    right: {
                        row: formValues['shadduction-right'],
                        power: formValues['shadduction-right-power'],
                        tone: formValues['shadduction-right-tone']
                    }
                },
                adductionMajor: {
                    left: {
                        row: formValues['shadduction2-left'],
                        power: formValues['shadduction2-left-power'],
                        tone: formValues['shadduction2-left-tone']
                    },
                    right: {
                        row: formValues['shadduction2-right'],
                        power: formValues['shadduction2-right-power'],
                        tone: formValues['shadduction2-right-tone']
                    }
                },
                extRotation: {
                    left: {
                        row: formValues['shext-left'],
                        power: formValues['shext-left-power'],
                        tone: formValues['shext-left-tone']
                    },
                    right: {
                        row: formValues['shext-right'],
                        power: formValues['shext-right-power'],
                        tone: formValues['shext-right-tone']
                    }
                },
                intRotation: {
                    left: {
                        row: formValues['shint-left'],
                        power: formValues['shint-left-power'],
                        tone: formValues['shint-left-tone']
                    },
                    right: {
                        row: formValues['shint-right'],
                        power: formValues['shint-right-power'],
                        tone: formValues['shint-right-tone']
                    }
                }
            },


            wrist: {
                flexionRad: {
                    left: {
                        row: formValues['wflex1-left'],
                        power: formValues['wflex1-left-power'],
                        tone: formValues['wflex1-left-tone']
                    },
                    right: {
                        row: formValues['wflex1-right'],
                        power: formValues['wflex1-right-power'],
                        tone: formValues['wflex1-right-tone']
                    }
                },
                flexionUln: {
                    left: {
                        row: formValues['wflex2-left'],
                        power: formValues['wflex2-left-power'],
                        tone: formValues['wflex2-left-tone']
                    },
                    right: {
                        row: formValues['wflex2-right'],
                        power: formValues['wflex2-right-power'],
                        tone: formValues['wflex2-right-tone']
                    }
                },
                extensionRad: {
                    left: {
                        row: formValues['wextension1-left'],
                        power: formValues['wextension1-left-power'],
                        tone: formValues['wextension1-left-tone']
                    },
                    right: {
                        row: formValues['wextension1-right'],
                        power: formValues['wextension1-right-power'],
                        tone: formValues['wextension1-right-tone']
                    }
                },
                extensionUln: {
                    left: {
                        row: formValues['wextension2-left'],
                        power: formValues['wextension2-left-power'],
                        tone: formValues['wextension2-left-tone']
                    },
                    right: {
                        row: formValues['wextension2-right'],
                        power: formValues['wextension2-right-power'],
                        tone: formValues['wextension2-right-tone']
                    }
                },
                radialRad: {
                    left: {
                        row: formValues['wradial1-left'],
                        power: formValues['wradial1-left-power'],
                        tone: formValues['wradial1-left-tone']
                    },
                    right: {
                        row: formValues['wradial1-right'],
                        power: formValues['wradial1-right-power'],
                        tone: formValues['wradial1-right-tone']
                    }
                },
                radialLongus: {
                    left: {
                        row: formValues['wradial2-left'],
                        power: formValues['wradial2-left-power'],
                        tone: formValues['wradial2-left-tone']
                    },
                    right: {
                        row: formValues['wradial2-right'],
                        power: formValues['wradial2-right-power'],
                        tone: formValues['wradial2-right-tone']
                    }
                },
                ulnarFlex: {
                    left: {
                        row: formValues['wulnar1-left'],
                        power: formValues['wulnar1-left-power'],
                        tone: formValues['wulnar1-left-tone']
                    },
                    right: {
                        row: formValues['wulnar1-right'],
                        power: formValues['wulnar1-right-power'],
                        tone: formValues['wulnar1-right-tone']
                    }
                },
                ulnarExt: {
                    left: {
                        row: formValues['wulnar2-left'],
                        power: formValues['wulnar2-left-power'],
                        tone: formValues['wulnar2-left-tone']
                    },
                    right: {
                        row: formValues['wulnar2-right'],
                        power: formValues['wulnar2-right-power'],
                        tone: formValues['wulnar2-right-tone']
                    }
                }
            },



            fingers: {
                flexionLumbricals: {
                    left: {
                        row: formValues['fflex1-left'],
                        power: formValues['fflex1-left-power'],
                        tone: formValues['fflex1-left-tone']
                    },
                    right: {
                        row: formValues['fflex1-right'],
                        power: formValues['fflex1-right-power'],
                        tone: formValues['fflex1-right-tone']
                    }
                },
                flexionSup: {
                    left: {
                        row: formValues['fflex2-left'],
                        power: formValues['fflex2-left-power'],
                        tone: formValues['fflex2-left-tone']
                    },
                    right: {
                        row: formValues['fflex2-right'],
                        power: formValues['fflex2-right-power'],
                        tone: formValues['fflex2-right-tone']
                    }
                },
                flexionProf: {
                    left: {
                        row: formValues['fflex3-left'],
                        power: formValues['fflex3-left-power'],
                        tone: formValues['fflex3-left-tone']
                    },
                    right: {
                        row: formValues['fflex3-right'],
                        power: formValues['fflex3-right-power'],
                        tone: formValues['fflex3-right-tone']
                    }
                },
                extension: {
                    left: {
                        row: formValues['fextension-left'],
                        power: formValues['fextension-left-power'],
                        tone: formValues['fextension-left-tone']
                    },
                    right: {
                        row: formValues['fextension-right'],
                        power: formValues['fextension-right-power'],
                        tone: formValues['fextension-right-tone']
                    }
                },
                adduction: {
                    left: {
                        row: formValues['fadduction-left'],
                        power: formValues['fadduction-left-power'],
                        tone: formValues['fadduction-left-tone']
                    },
                    right: {
                        row: formValues['fadduction-right'],
                        power: formValues['fadduction-right-power'],
                        tone: formValues['fadduction-right-tone']
                    }
                },
                abduction: {
                    left: {
                        row: formValues['fabduction-left'],
                        power: formValues['fabduction-left-power'],
                        tone: formValues['fabduction-left-tone']
                    },
                    right: {
                        row: formValues['fabduction-right'],
                        power: formValues['fabduction-right-power'],
                        tone: formValues['fabduction-right-tone']
                    }
                }
            },



            thumb: {
                flexionBrevis: {
                    left: {
                        row: formValues['thflex1-left'],
                        power: formValues['thflex1-left-power'],
                        tone: formValues['thflex1-left-tone']
                    },
                    right: {
                        row: formValues['thflex1-right'],
                        power: formValues['thflex1-right-power'],
                        tone: formValues['thflex1-right-tone']
                    }
                },
                flexionLongus: {
                    left: {
                        row: formValues['thflex2-left'],
                        power: formValues['thflex2-left-power'],
                        tone: formValues['thflex2-left-tone']
                    },
                    right: {
                        row: formValues['thflex2-right'],
                        power: formValues['thflex2-right-power'],
                        tone: formValues['thflex2-right-tone']
                    }
                },
                extensionBrevis: {
                    left: {
                        row: formValues['thextension-left'],
                        power: formValues['thextension-left-power'],
                        tone: formValues['thextension-left-tone']
                    },
                    right: {
                        row: formValues['thextension-right'],
                        power: formValues['thextension-right-power'],
                        tone: formValues['thextension-right-tone']
                    }
                },
                extensionLongus: {
                    left: {
                        row: formValues['thextension2-left'],
                        power: formValues['thextension2-left-power'],
                        tone: formValues['thextension2-left-tone']
                    },
                    right: {
                        row: formValues['thextension2-right'],
                        power: formValues['thextension2-right-power'],
                        tone: formValues['thextension2-right-tone']
                    }
                },
                adduction: {
                    left: {
                        row: formValues['thadd-left'],
                        power: formValues['thadd-left-power'],
                        tone: formValues['thadd-left-tone']
                    },
                    right: {
                        row: formValues['thadd-right'],
                        power: formValues['thadd-right-power'],
                        tone: formValues['thadd-right-tone']
                    }
                },
                abduction: {
                    left: {
                        row: formValues['thabd-left'],
                        power: formValues['thabd-left-power'],
                        tone: formValues['thabd-left-tone']
                    },
                    right: {
                        row: formValues['thabd-right'],
                        power: formValues['thabd-right-power'],
                        tone: formValues['thabd-right-tone']
                    }
                },
                opposition: {
                    left: {
                        row: formValues['thoppo-left'],
                        power: formValues['thoppo-left-power'],
                        tone: formValues['thoppo-left-tone']
                    },
                    right: {
                        row: formValues['thoppo-right'],
                        power: formValues['thoppo-right-power'],
                        tone: formValues['thoppo-right-tone']
                    }
                }
            },


            hnAndt: {
                flexionSternoclenoid: {
                    left: {
                        row: formValues['hntflex-left'],
                        power: formValues['hntflex-left-power'],
                        tone: formValues['hntflex-left-tone']
                    },
                    right: {
                        row: formValues['hntflex-right'],
                        power: formValues['hntflex-right-power'],
                        tone: formValues['hntflex-right-tone']
                    }
                },
                extensionExtensors: {
                    left: {
                        row: formValues['hntextension-left'],
                        power: formValues['hntextension-left-power'],
                        tone: formValues['hntextension-left-tone']
                    },
                    right: {
                        row: formValues['hntextension-right'],
                        power: formValues['hntextension-right-power'],
                        tone: formValues['hntextension-right-tone']
                    }
                },
                flexionRectus: {
                    left: {
                        row: formValues['hntflex2-left'],
                        power: formValues['hntflex2-left-power'],
                        tone: formValues['hntflex2-left-tone']
                    },
                    right: {
                        row: formValues['hntflex2-right'],
                        power: formValues['hntflex2-right-power'],
                        tone: formValues['hntflex2-right-tone']
                    }
                },
                extensionDorsal: {
                    left: {
                        row: formValues['hntextension2-left'],
                        power: formValues['hntextension2-left-power'],
                        tone: formValues['hntextension2-left-tone']
                    },
                    right: {
                        row: formValues['hntextension2-right'],
                        power: formValues['hntextension2-right-power'],
                        tone: formValues['hntextension2-right-tone']
                    }
                },
                extensionLumbar: {
                    left: {
                        row: formValues['hntextension3-left'],
                        power: formValues['hntextension3-left-power'],
                        tone: formValues['hntextension3-left-tone']
                    },
                    right: {
                        row: formValues['hntextension3-right'],
                        power: formValues['hntextension3-right-power'],
                        tone: formValues['hntextension3-right-tone']
                    }
                },
                hipHike: {
                    left: {
                        row: formValues['hike-left'],
                        power: formValues['hike-left-power'],
                        tone: formValues['hike-left-tone']
                    },
                    right: {
                        row: formValues['hike-right'],
                        power: formValues['hike-right-power'],
                        tone: formValues['hike-right-tone']
                    }
                },
                facialMovt: {
                    left: {
                        row: formValues['face-left'],
                        power: formValues['face-left-power'],
                        tone: formValues['face-left-tone']
                    },
                    right: {
                        row: formValues['face-right'],
                        power: formValues['face-right-power'],
                        tone: formValues['face-right-tone']
                    }
                }
            },

            measurement: {
                asisToMedialMalleolus: formValues['asis'],
                umblicusToMedialMalleolus: formValues['umblicus'],
                midThighCircumference: formValues['midThigh'],
                midCalfCircumference: formValues['midCalf']
            }
        }
        console.log(data);
        props.addMotorData(data);
    };


    const initialValues = { date: new Date().toISOString().substr(0, 10) };

    return (
        <Form onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit, form }) => (
                <div className="text-center">
                    <form onSubmit={handleSubmit} className="ui form ">
                        <div className="item">
                            <label>Date</label>
                            <Field name="date" type="date">
                                {({ input, meta }) => <input type="date" {...input} />}
                            </Field>
                        </div>
                        <br />
                        <br />
                        <div>
                            <table class="datatable table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            <h4
                                                onClick={() => setOpen(14)}
                                                style={{ cursor: "pointer" }}
                                            >Combined Movement Assesment Of Spine</h4>
                                        </th>
                                    </tr>
                                </thead>
                                {open === 14 && (
                                    <div class="card-body">
                                        <div class="table-responsive media-body">

                                            <table
                                                class="table table-striped table-bordered"
                                                id="advancedDataTable"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center">
                                                            Cervical spine
                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="cs">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            Thoracic Spine
                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="ts">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">Lumbar Spine</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="ls">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(15)}
                                            style={{ cursor: "pointer" }}
                                        >Cervical Spine</h4></th>
                                    </tr>
                                </thead>

                                {open === 15 && (
                                    <div class="card-body">
                                        <div class="table-responsive media-body">
                                            {/* <label>Finger To Nose</label> */}
                                            <table
                                                class="table table-striped table-bordered"
                                                id="advancedDataTable"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center">
                                                            Flexion
                                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="csflex">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            Extension
                                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="csextension">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <table
                                                class="table table-striped table-bordered"
                                                id="advancedDataTable"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center"></td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <center>Left</center>
                                                        </td>
                                                        <td class="text-center">
                                                            <center>Right</center>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">Side Flexion</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="csflex-left">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                        <td class="text-center">
                                                            <Field name="csflex-right">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">Rotation</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="csrota-left">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                        <td class="text-center">
                                                            <Field name="csrota-right">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(16)}
                                            style={{ cursor: "pointer" }}
                                        >Thoraric Spine</h4></th>
                                    </tr>
                                </thead>

                                {open === 16 && (
                                    <div class="card-body">
                                        <div class="table-responsive media-body">
                                            {/* <label>Finger To Nose</label> */}
                                            <table
                                                class="table table-striped table-bordered"
                                                id="advancedDataTable"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center">
                                                            Flexion
                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="thflex">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            Extension
                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="thextension">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <table
                                                class="table table-striped table-bordered"
                                                id="advancedDataTable"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center"></td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <center>Left</center>
                                                        </td>
                                                        <td class="text-center">
                                                            <center>Right</center>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">Side Flexion</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="thflex-left">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                        <td class="text-center">
                                                            <Field name="thflex-right">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">Rotation</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="throta-left">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                        <td class="text-center">
                                                            <Field name="throta-right">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(17)}
                                            style={{ cursor: "pointer" }}
                                        >Lumbar Spine</h4></th>
                                    </tr>
                                </thead>

                                {open === 17 && (
                                    <div class="card-body">
                                        <div class="table-responsive media-body">
                                            {/* <label>Finger To Nose</label> */}
                                            <table
                                                class="table table-striped table-bordered"
                                                id="advancedDataTable"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center">
                                                            Flexion
                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="luflex">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            Extension
                                        </td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="luextension">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <table
                                                class="table table-striped table-bordered"
                                                id="advancedDataTable"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center"></td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <center>Left</center>
                                                        </td>
                                                        <td class="text-center">
                                                            <center>Right</center>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">Side Flexion</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="luflex-left">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                        <td class="text-center">
                                                            <Field name="luflex-right">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">Rotation</td>
                                                        <td class="text-center"></td>
                                                        <td class="text-center">
                                                            <Field name="lurota-left">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                        <td class="text-center">
                                                            <Field name="lurota-right">
                                                                {({ input, meta }) => (
                                                                    <input type="text" {...input} />
                                                                )}
                                                            </Field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}


                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(1)}
                                            style={{ cursor: "pointer" }}
                                        >Head Neck and Trunk</h4></th>
                                        <th colspan="3">Left</th>
                                        <th colspan="3">Right</th>
                                    </tr>
                                </thead>

                                {open === 1 && (
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>ROW</td>
                                            <td>Power</td>
                                            <td>Tone</td>
                                            <td>ROW</td>
                                            <td>Power</td>
                                            <td>Tone</td>

                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[STERNOCLENOID Cr XI]</td>
                                            <td>
                                                <Field name="hntflex-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntflex-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hntflex-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hntflex-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntflex-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntflex-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[NECK EXTENSORS C1-T1]</td>
                                            <td>
                                                <Field name="hntextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hntextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hntextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[RECTUS ABD. T7-L1]</td>
                                            <td>
                                                <Field name="hntflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hntflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hntflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[DORSAL SPINAL MUSCLE]</td>
                                            <td>
                                                <Field name="hntextension2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hntextension2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hntextension2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[LUMBAR SPINAL MUSCLE]</td>
                                            <td>
                                                <Field name="hntextension3-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension3-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hntextension3-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hntextension3-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension3-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hntextension3-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hip Hike<br></br>[QUAD LUMB L1-L3, T1-T2]</td>
                                            <td>
                                                <Field name="hike-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hike-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hike-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hike-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hike-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hike-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Facial Movt.<br></br>[FACIAL MUSCLE Cr VII]</td>
                                            <td>
                                                <Field name="face-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="face-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="face-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="face-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="face-right-power" component="select">
                                                        <option selected>Power</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2-">2-</option>
                                                        <option value="2">2</option>
                                                        <option value="2+">2+</option>
                                                        <option value="3-">3-</option>
                                                        <option value="3">3</option>
                                                        <option value="3+">3+</option>
                                                        <option value="4-">4-</option>
                                                        <option value="4">4</option>
                                                        <option value="4+">4+</option>
                                                        <option value="5-">5-</option>
                                                        <option value="5">5</option>
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="face-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(2)}
                                            style={{ cursor: "pointer" }}
                                        >Hip</h4></th>
                                    </tr>
                                </thead>
                                {open === 2 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[ILIOPSOAS L1-L4]</td>
                                            <td>
                                                <Field name="hipflex-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipflex-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipflex-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[SARTORIUS L2-L4]</td>
                                            <td>
                                                <Field name="hipflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[RECTUS FEMORIS L2-L4]</td>
                                            <td>
                                                <Field name="hipflex3-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex3-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipflex3-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipflex3-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex3-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipflex3-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[GLUTEUS MAX L5-S1-S2]</td>
                                            <td>
                                                <Field name="hipextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Abduction<br></br>[GLUTEUS MED. MIN L4-L5-S1]</td>
                                            <td>
                                                <Field name="hipabduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipabduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipabduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipabduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipabduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipabduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Abduction<br></br>[TENS. FAS. LATA. L4-L5-S1]</td>
                                            <td>
                                                <Field name="hipabduction2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipabduction2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipabduction2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipabduction2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipabduction2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipabduction2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adduction<br></br>[ADDUCTORS L2-L4]</td>
                                            <td>
                                                <Field name="hipadduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipadduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipadduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipadduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipadduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipadduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ext. Rotation<br></br>[EXT. ROTATORS L2-L5-S1]</td>
                                            <td>
                                                <Field name="hipext-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipext-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipext-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipext-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipext-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipext-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Int. Rotation<br></br>[INT. ROTATORS L4-L5-S1-S2]</td>
                                            <td>
                                                <Field name="hipint-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipint-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="hipint-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="hipint-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipint-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="hipint-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(3)}
                                            style={{ cursor: "pointer" }}
                                        >Knee</h4></th>

                                    </tr>
                                </thead>
                                {open === 3 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[MED. HAMSTRING L4-L5-S1-S2]</td>
                                            <td>
                                                <Field name="kneeflex-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="kneeflex-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="kneeflex-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[LAT. HAMSTRING L5-S1-S2-S3]</td>
                                            <td>
                                                <Field name="kneeflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="kneeflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="kneeflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[GRACILIS L2-L4]</td>
                                            <td>
                                                <Field name="kneeflex3-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex3-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="kneeflex3-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="kneeflex3-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex3-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeflex3-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[QUADRICEPS L2-L4]</td>
                                            <td>
                                                <Field name="kneeextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="kneeextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="kneeextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="kneeextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(4)}
                                            style={{ cursor: "pointer" }}
                                        >Ankle</h4></th>

                                    </tr>
                                </thead>
                                {open === 4 && (
                                    <tbody>
                                        <tr>
                                            <td>Plantar Flexion<br></br>[GASTROCMEIUS S1-S2]</td>
                                            <td>
                                                <Field name="ankleflex-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="ankleflex-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="ankleflex-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Plantar Flexion<br></br>[SOLEUS L5-S1-S2]</td>
                                            <td>
                                                <Field name="ankleflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="ankleflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="ankleflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Dorsi Flexion<br></br>[ANT. TIBIAL, PERON. TERT. L4-L5-S1]</td>
                                            <td>
                                                <Field name="ankleflex3-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex3-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="ankleflex3-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="ankleflex3-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex3-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleflex3-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Inversion<br></br>[ANT. TIBIAL, POST. TIBIAL L4-L5-S1-S2]</td>
                                            <td>
                                                <Field name="ankleinversion-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleinversion-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="ankleinversion-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="ankleinversion-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleinversion-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleinversion-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Eversion<br></br>[PERONEALS L4-L5-S1]</td>
                                            <td>
                                                <Field name="ankleeversion-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleeversion-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="ankleeversion-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="ankleeversion-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleeversion-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="ankleeversion-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(5)}
                                            style={{ cursor: "pointer" }}
                                        >Toes</h4></th>

                                    </tr>
                                </thead>
                                {open === 5 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[FLEXOR DIGI. BREVIS, LONG AND LUMBRICALS L5-S1]</td>
                                            <td>
                                                <Field name="toesflex-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="toesflex-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="toesflex-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="toesflex-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="toesflex-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="toesflex-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[EXT. DIGI. BREVIS, LONG L4-L5-S1-S2]</td>
                                            <td>
                                                <Field name="toesextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="toesextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="toesextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="toesextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="toesextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="toesextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}


                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(6)}
                                            style={{ cursor: "pointer" }}
                                        >Hallux</h4></th>

                                    </tr>
                                </thead>
                                {open === 6 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[FLEXOR HALL. BREV L5-S1]</td>
                                            <td>
                                                <Field name="halluxflex-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="halluxflex-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="halluxflex-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[FLEXOR HALL. LONG L4-L5-S1-S2]</td>
                                            <td>
                                                <Field name="halluxflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="halluxflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="halluxflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[EXT. HALL LONG L4-L5-S1-S2]</td>
                                            <td>
                                                <Field name="halluxflex3-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex3-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="halluxflex3-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="halluxflex3-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex3-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="halluxflex3-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(7)}
                                            style={{ cursor: "pointer" }}
                                        >Shoulder</h4></th>

                                    </tr>
                                </thead>
                                {open === 7 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[CORAC. A. DELT. C5-C6]</td>
                                            <td>
                                                <Field name="shflex-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shflex-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shflex-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shflex-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shflex-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shflex-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[LATTIS DORSI C6-C7-C8]</td>
                                            <td>
                                                <Field name="shextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Abduction<br></br>[DELT. SUPRA C4-C5-C6]</td>
                                            <td>
                                                <Field name="shabduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shabduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shabduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shabduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shabduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shabduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Abduction<br></br>[POST DELTOID C5-C6]</td>
                                            <td>
                                                <Field name="shabduction2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shabduction2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shabduction2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shabduction2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shabduction2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shabduction2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adduction<br></br>[T. MAJ. POST DELT C5-C6-C7]</td>
                                            <td>
                                                <Field name="shadduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shadduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shadduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shadduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shadduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shadduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adduction<br></br>[PECT. MAJOR C5-C6-C7-C8-T1]</td>
                                            <td>
                                                <Field name="shadduction2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shadduction2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shadduction2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shadduction2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shadduction2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shadduction2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ext. Rotation<br></br>[T. MINOR, INFRA, P DELT. C5-C6]</td>
                                            <td>
                                                <Field name="shext-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shext-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shext-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shext-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shext-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shext-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Int. Rotation<br></br>[T. MAJOR, A. DELT. C5-C6]</td>
                                            <td>
                                                <Field name="shint-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shint-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="shint-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="shint-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shint-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="shint-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}


                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(8)}
                                            style={{ cursor: "pointer" }}
                                        >Scapula</h4></th>

                                    </tr>
                                </thead>
                                {open === 8 && (
                                    <tbody>
                                        <tr>
                                            <td>Abduction<br></br>[SERRATUS ANT. C5-C7]</td>
                                            <td>
                                                <Field name="scaabduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaabduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="scaabduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="scaabduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaabduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaabduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Elevation<br></br>[UPPER TRAPS C2-C4]</td>
                                            <td>
                                                <Field name="scaelevation-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaelevation-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="scaelevation-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="scaelevation-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaelevation-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaelevation-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adduction<br></br>[MID TRAPS C2-C4]</td>
                                            <td>
                                                <Field name="scaadduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaadduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="scaadduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="scaadduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaadduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaadduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adduction<br></br>[RHOMBOIDS C4-C5]</td>
                                            <td>
                                                <Field name="scaadduction2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaadduction2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="scaadduction2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="scaadduction2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaadduction2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="scaadduction2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Depression<br></br>[LOWER TRAPS C2-C4]</td>
                                            <td>
                                                <Field name="depress-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="depress-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="depress-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="depress-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="depress-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="depress-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pain<br></br>[Upper Congestion]</td>
                                            <td>
                                                <Field name="pain-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="pain-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="pain-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="pain-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="pain-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="pain-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(9)}
                                            style={{ cursor: "pointer" }}
                                        >Elbow</h4></th>

                                    </tr>
                                </thead>
                                {open === 9 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[BICEPS BRACHIALIS C5-C6]</td>
                                            <td>
                                                <Field name="eflex1-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eflex1-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="eflex1-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="eflex1-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eflex1-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eflex1-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[BRACHIORADIALIS C5-C6]</td>
                                            <td>
                                                <Field name="eflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="eflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="eflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[TRICEPS C6-C8]</td>
                                            <td>
                                                <Field name="eextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="eextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="eextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="eextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(10)}
                                            style={{ cursor: "pointer" }}
                                        >Fore Arm</h4></th>

                                    </tr>
                                </thead>
                                {open === 10 && (
                                    <tbody>
                                        <tr>
                                            <td>Supination<br></br>[BICEPS C5-C6]</td>
                                            <td>
                                                <Field name="fsupination-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fsupination-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fsupination-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fsupination-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fsupination-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fsupination-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Supination<br></br>[SUPINATOR C6]</td>
                                            <td>
                                                <Field name="fsupination2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fsupination2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fsupination2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fsupination2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fsupination2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fsupination2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pronation<br></br>[PRONATORS C6]</td>
                                            <td>
                                                <Field name="fpronation-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fpronation-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fpronation-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fpronation-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fpronation-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fpronation-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(11)}
                                            style={{ cursor: "pointer" }}
                                        >Wrist</h4></th>

                                    </tr>
                                </thead>
                                {open === 11 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[FL. CARP. RAD. C6-C8]</td>
                                            <td>
                                                <Field name="wflex1-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wflex1-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wflex1-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wflex1-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wflex1-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wflex1-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[FL. CARP. ULN. C8]</td>
                                            <td>
                                                <Field name="wflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[EXT. CARP. RAD C6-C7]</td>
                                            <td>
                                                <Field name="wextension1-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wextension1-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wextension1-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wextension1-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wextension1-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wextension1-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[EXT. CARP. ULN C7]</td>
                                            <td>
                                                <Field name="wextension2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wextension2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wextension2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wextension2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wextension2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wextension2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Radial Deviation<br></br>[FLEXOR CARP. RAD C6-C7]</td>
                                            <td>
                                                <Field name="wradial1-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wradial1-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wradial1-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wradial1-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wradial1-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wradial1-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Radial Deviation<br></br>[EXT. CARP. RAD LONGUS C6-C7]</td>
                                            <td>
                                                <Field name="wradial2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wradial2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wradial2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wradial2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wradial2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wradial2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ulnar Deviation<br></br>[FLEX. CARP. ULNARIS C8-T1]</td>
                                            <td>
                                                <Field name="wulnar1-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wulnar1-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wulnar1-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wulnar1-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wulnar1-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wulnar1-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ulnar Deviation<br></br>[EXT. CARP. ULNARIS C7]</td>
                                            <td>
                                                <Field name="wulnar2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wulnar2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="wulnar2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="wulnar2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wulnar2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="wulnar2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}


                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(12)}
                                            style={{ cursor: "pointer" }}
                                        >Fingers</h4></th>

                                    </tr>
                                </thead>
                                {open === 12 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[LUMBRICALS C7-C8-T1]</td>
                                            <td>
                                                <Field name="fflex1-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex1-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fflex1-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fflex1-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex1-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex1-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[FLEX DIG. SUP. C7-C8-T1]</td>
                                            <td>
                                                <Field name="fflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[FLEX DIG. PROF. C8-T1]</td>
                                            <td>
                                                <Field name="fflex3-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex3-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fflex3-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fflex3-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex3-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fflex3-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[EXT. DIGITOR C7]</td>
                                            <td>
                                                <Field name="fextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Abduction<br></br>[D. INT ABD. D.M. C8-T1]</td>
                                            <td>
                                                <Field name="fabduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fabduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fabduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fabduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fabduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fabduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adduction<br></br>[PALM, INTER. C8]</td>
                                            <td>
                                                <Field name="fadduction-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fadduction-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="fadduction-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="fadduction-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fadduction-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="fadduction-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}


                                <thead>
                                    <tr>

                                        <th><h4
                                            onClick={() => setOpen(13)}
                                            style={{ cursor: "pointer" }}
                                        >Thumb</h4></th>

                                    </tr>
                                </thead>
                                {open === 13 && (
                                    <tbody>
                                        <tr>
                                            <td>Flexion<br></br>[FLEXOR POL BREVIS C6-C8]</td>
                                            <td>
                                                <Field name="thflex1-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thflex1-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="thflex1-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="thflex1-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thflex1-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thflex1-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Flexion<br></br>[FLEXOR POL LONGUS C8-T1]</td>
                                            <td>
                                                <Field name="thflex2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thflex2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="thflex2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="thflex2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thflex2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thflex2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[EXT. POL BREVIS C7]</td>
                                            <td>
                                                <Field name="thextension-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thextension-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="thextension-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="thextension-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thextension-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thextension-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Extension<br></br>[EXT. POL LONGUS C7]</td>
                                            <td>
                                                <Field name="thextension2-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thextension2-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="thextension2-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="thextension2-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thextension2-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thextension2-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Abduction<br></br>[ABDUCTORS P. C7]</td>
                                            <td>
                                                <Field name="thabd-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thabd-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="thabd-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="thabd-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thabd-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thabd-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adduction<br></br>[ADDUCTORS P. C6-C7]</td>
                                            <td>
                                                <Field name="thadd-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thadd-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="thadd-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="thadd-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thadd-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thadd-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Opposition<br></br>[OPPONENS POLLICIS C6-C8-T1]</td>
                                            <td>
                                                <Field name="thoppo-left" type="text">
                                                    {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                                </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thoppo-left-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>

                                                <div class=" four wide column">
                                                    <Field name="thoppo-left-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td><Field name="thoppo-right" type="text">
                                                {({ input, meta }) => <input type="text" {...input} placeholder="degree" />}
                                            </Field>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thoppo-right-power" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>

                                                            <option selected value="power">Power</option>
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2-">2-</option>
                                                            <option value="2">2</option>
                                                            <option value="2+">2+</option>
                                                            <option value="3-">3-</option>
                                                            <option value="3">3</option>
                                                            <option value="3+">3+</option>
                                                            <option value="4-">4-</option>
                                                            <option value="4">4</option>
                                                            <option value="4+">4+</option>
                                                            <option value="5-">5-</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" four wide column">
                                                    <Field name="thoppo-right-tone" type="select">
                                                        {({ input, meta }) => <select class="ui fluid dropdown" {...input}>
                                                            <option selected>Tone</option>
                                                            <option value="normal">Normal</option>
                                                            <option value="Flacial">Flacial</option>
                                                            <option value="Spastice">Spastice</option>
                                                            <option value="Rigid">Rigid</option>
                                                        </select>
                                                        }
                                                    </Field>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}

                            </table>
                            <table>
                                <thead>
                                    <tr>

                                        <th>Measurement</th>

                                    </tr>
                                </thead>
                                <tr>
                                    <td>
                                        Asis to Medial Malleolus
                                        </td>
                                    <td>
                                        <Field name="asis" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="cm" />}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Umblicus to Medial Malleolus
                                        </td>
                                    <td>
                                        <Field name="umblicus" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="cm" />}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Mid Thigh Circumference
                                        </td>
                                    <td>
                                        <Field name="midThigh" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="5 cm above Patella" />}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Mid Calf Circumference
                                        </td>
                                    <td>
                                        <Field name="midCalf" type="text">
                                            {({ input, meta }) => <input type="text" {...input} placeholder="5 cm below Patella" />}
                                        </Field>
                                    </td>
                                </tr>
                            </table>
                            <div style={{ textAlign: "center" }}>
                                <button
                                    // disabled={!_.isEmpty(errors) || submitting}
                                    className="ui primary button"
                                >
                                    Save
                                </button>
                                <button
                                    // disabled={!_.isEmpty(errors) || submitting}
                                    className="ui button"
                                    type="reset"
                                // onClick={form.reset}
                                >
                                    Discard
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            )}
        </Form>
    );
}


const mapStateToProps = (state) => {
    return {
        motorData: state.motorData,
    };
};

export default connect(mapStateToProps, { addMotorData })(Motor);