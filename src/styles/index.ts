const STYLES = {
    "background-color--transparent-bg-color": {
        "background-color": "var(--transparent-bg-color)"
    },
    "background-color--main-bg-color": {
        "background-color": "var(--main-bg-color)"
    },
    "color--main-color": {
        "color": "var(--main-color)"
    },
    "color--secondary-color": {
        "color": "var(--secondary-color)"
    },
    "background-color--secondary-color": {
        "background-color": "var(--secondary-color)"
    },
    "border-radius--border-radius": {
        "border-radius": "var(--border-radius)"
    },
    "box-shadow--main-bg-lilear": {
        "box-shadow": "var(--main-bg-lilear)"
    },
    "display-flex": {
        "display": "flex"
    },
    "align-items-center": {
        "align-items": "center"
    },
    "align-items-flex-start": {
        "align-items": "flex-start"
    },
    "align-items-flex-end": {
        "align-items": "flex-end"
    },
    "flex-direction-column": {
        "flex-direction": "column"
    },
    "flex-1": {
        "flex": "1"
    },
    "justify-content-space-between": {
        "justify-content": "space-between"
    },
    "justify-content-center": {
        "justify-content": "center"
    },
    "border-radius-50%": {
        "border-radius": "50%"
    },
    "background-color-button-shadow": {
        "background-color": "ButtonShadow"
    },
    "font-weight-bold": {
        "font-weight": "bold"
    },
    "font-size-24": {
        "font-size": "24px"
    },
    "padding-top-10": {
        "padding-top": "10px"
    },
    "padding-top-20": {
        "padding-top": "20px"
    },
    "padding-right-10": {
        "padding-right": "10px"
    },
    "padding-right-20": {
        "padding-right": "20px"
    },
    "padding-bottom-10": {
        "padding-bottom": "10px"
    },
    "padding-bottom-20": {
        "padding-bottom": "20px"
    },
    "padding-left-20": {
        "padding-left": "20px"
    },
    "padding-left-10": {
        "padding-left": "10px"
    },
    "margin-top-10": {
        "margin-top": "10px"
    },
    "margin-right-10": {
        "margin-right": "10px"
    },
    "margin-bottom-10": {
        "margin-bottom": "10px"
    },
    "margin-left-10": {
        "margin-left": "10px"
    },
    "margin-top-20": {
        "margin-top": "20px"
    },
    "margin-right-20": {
        "margin-right": "20px"
    },
    "margin-bottom-20": {
        "margin-bottom": "20px"
    },
    "margin-left-20": {
        "margin-left": "20px"
    },
    "margin-0-auto": {
        "margin": "0 auto"
    },
    "border-none": {
        "border": "none"
    },
    "border-style-solid": {
        "border-style": "solid"
    },
    "border-width-2": {
        "order-width": "2px"
    },
    "border-color-red": {
        "border-color": "red"
    },
    "color-red": {
        "color": "red"
    },
    "width-fit-content": {
        "width": "fit-content"
    },
    "width-1200": {
        "width": "1200px"
    },
    "width-702": {
        "width": "702px"
    },
    "width-290": {
        "width": "290px"
    },
    "width-473": {
        "width": "473px"
    },
    "width-100%": {
        "width": "100%"
    },
    "height-100vh": {
        "height": "100vh"
    },
    "white-space-normal": {
        "white-space": "normal"
    },
    "word-break-break-word": {
        "word-break": "break-word"
    },
    "position-absolute": {
        "position": "absolute"
    },
    "position-sticky": {
        "position": "sticky"
    },
    "position-static": {
        "position": "static"
    },
    "top-0": {
        "top": "0"
    },
    "cursor-pointer": {
        "cursor": "pointer"
    },
    "children/margin-bottom-10": {
        "> *": {
            "&:not(:last-child)": {
                "margin-bottom": "10px"
            }
        }
    },
    "children/margin-top-10": {
        "> *": {
            "&:not(:first-of-type)": {
                "margin-top": "10px"
            }
        }
    },
    "children/margin-right-10": {
        "> *": {
            "&:not(:last-child)": {
                "margin-right": "10px"
            }
        }
    },
    "children/display-flex": {
        "> *": {
            "display": "flex"
        }
    }
}

export default STYLES
