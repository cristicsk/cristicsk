import React, { Component } from 'react';
import './svg.css'

class Svg extends Component {
    

    render() {
        const svgClasses = ['web-dev-svg'];
        if(this.props.firstRender === true) { svgClasses.push('first-render') }
        return <div className="svgbox">
            <svg version="1.1" className={svgClasses.join(' ')} xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 575 100" >
                <g>
                    <path d="M53.309,83.104c-1.414,0-2.526-0.898-2.833-2.29L41.816,46.71
       l-8.382,34.056c-0.229,1.406-1.354,2.339-2.846,2.339h-5.84c-1.389,0-2.496-0.848-2.821-2.16L6.915,26.567L6.749,26.07v-0.325
       c0-1.555,1.151-2.64,2.8-2.64h6.48c1.41,0,2.521,0.896,2.832,2.283l8.681,32.995l8.227-33.042c0.296-1.339,1.408-2.237,2.821-2.237
       h6.32c1.41,0,2.521,0.896,2.832,2.283l8.695,33.116l8.78-33.19c0.289-1.311,1.401-2.209,2.813-2.209h6.08
       c0.861,0,1.619,0.34,2.135,0.958c0.524,0.632,0.716,1.449,0.548,2.307l-0.03,0.129l-14.48,54.399
       c-0.291,1.31-1.402,2.206-2.813,2.206H53.309z"/>
                    <path d="M23.869,80.464L8.829,25.984l-0.08-0.24c0-0.426,0.266-0.64,0.8-0.64
       h6.48c0.48,0,0.773,0.24,0.88,0.72l10.48,39.84c0.052,0.107,0.12,0.16,0.2,0.16s0.146-0.053,0.2-0.16l9.92-39.84
       c0.106-0.48,0.4-0.72,0.88-0.72h6.32c0.48,0,0.772,0.24,0.88,0.72l10.48,39.92c0.052,0.107,0.106,0.159,0.16,0.159
       c0.052,0,0.106-0.052,0.16-0.159l10.56-39.92c0.106-0.48,0.4-0.72,0.88-0.72h6.08c0.267,0,0.466,0.08,0.6,0.24
       c0.132,0.16,0.172,0.374,0.12,0.64l-14.48,54.399c-0.107,0.48-0.4,0.721-0.88,0.721h-6.16c-0.48,0-0.774-0.24-0.88-0.721
       l-10.48-41.279c-0.054-0.16-0.108-0.24-0.16-0.24c-0.054,0-0.107,0.08-0.16,0.24l-10.16,41.279c-0.054,0.48-0.348,0.721-0.88,0.721
       h-5.84C24.269,81.104,23.975,80.892,23.869,80.464z"/>
                    <path d="M94.988,83.825c-4.264,0-7.938-0.968-10.918-2.876
       c-3.002-1.921-5.277-4.675-6.764-8.186c-1.382-3.397-2.078-7.5-2.078-12.22c0-4.122,0.313-7.209,0.959-9.436
       c1.059-4.063,3.248-7.368,6.491-9.771c3.22-2.384,7.146-3.593,11.67-3.593c5.914,0,10.456,1.559,13.501,4.632
       c2.978,3.008,4.81,7.404,5.446,13.065c0.222,2.285,0.306,4.84,0.252,7.622c0,1.61-1.151,2.762-2.799,2.762h-23.78
       c0.074,0.931,0.203,1.503,0.317,1.847l0.032,0.104c0.458,1.671,1.357,2.937,2.746,3.869c1.442,0.969,3.341,1.46,5.645,1.46
       c3.225,0,5.646-1.276,7.397-3.901c0.715-1.304,1.823-1.448,2.276-1.448c0.417,0,1.038,0.11,1.681,0.622l4.577,3.051l0.093,0.08
       c1.1,0.945,1.364,2.338,0.673,3.548c-1.723,2.771-4.131,4.927-7.195,6.475C102.19,83.054,98.751,83.825,94.988,83.825z
        M101.725,55.505c-0.095-0.89-0.197-1.433-0.278-1.757c-0.423-1.648-1.23-2.935-2.466-3.92c-1.222-0.972-2.738-1.444-4.633-1.444
       c-1.857,0-3.317,0.428-4.462,1.307c-1.151,0.885-1.914,2.046-2.331,3.549c-0.208,0.656-0.368,1.409-0.483,2.266H101.725z"/>
                    <path d="M111.548,63.024c0,0.533-0.267,0.801-0.8,0.801h-25.52
       c-0.214,0-0.32,0.107-0.32,0.319c0,1.813,0.16,3.2,0.48,4.16c0.586,2.134,1.772,3.8,3.56,5c1.786,1.2,4.04,1.8,6.76,1.8
       c3.946,0,6.986-1.627,9.12-4.88c0.266-0.532,0.612-0.612,1.04-0.24l4.56,3.04c0.373,0.32,0.452,0.668,0.24,1.04
       c-1.494,2.399-3.614,4.294-6.36,5.681c-2.748,1.386-5.854,2.08-9.32,2.08c-3.894,0-7.174-0.854-9.84-2.561
       c-2.667-1.707-4.667-4.133-6-7.28c-1.28-3.146-1.92-6.96-1.92-11.44c0-3.893,0.292-6.852,0.88-8.879
       c0.96-3.681,2.88-6.587,5.76-8.721c2.88-2.132,6.373-3.2,10.48-3.2c5.386,0,9.413,1.347,12.08,4.04
       c2.666,2.693,4.292,6.654,4.88,11.881C111.521,57.853,111.601,60.305,111.548,63.024z M88.668,48.104
       c-1.494,1.147-2.507,2.68-3.04,4.6c-0.374,1.174-0.614,2.668-0.72,4.48c0,0.214,0.106,0.32,0.32,0.32h18.32
       c0.213,0,0.32-0.106,0.32-0.32c-0.107-1.76-0.268-3.066-0.48-3.92c-0.534-2.08-1.587-3.746-3.16-5
       c-1.574-1.252-3.534-1.881-5.88-1.881C92.054,46.384,90.161,46.958,88.668,48.104z"/>
                    <path d="M138.748,83.745c-2.149,0-4.184-0.44-6.045-1.309
       c-0.662-0.309-1.295-0.663-1.897-1.061c-0.386,1.055-1.356,1.729-2.618,1.729h-6.08c-1.648,0-2.8-1.151-2.8-2.8v-54.4
       c0-1.648,1.151-2.8,2.8-2.8h6.08c1.648,0,2.8,1.151,2.8,2.8v14.041c0.57-0.356,1.167-0.673,1.791-0.949
       c1.875-0.83,3.883-1.251,5.969-1.251c4.432,0,8.154,1.136,11.061,3.376c2.877,2.218,4.965,5.32,6.205,9.217
       c0.913,2.912,1.374,6.37,1.374,10.286c0,4.21-0.551,7.883-1.637,10.915c-1.289,3.809-3.395,6.838-6.246,8.968
       C146.63,82.655,143.01,83.745,138.748,83.745z M137.948,48.384c-2.262,0-3.871,0.976-5.062,3.069
       c-1.206,2.133-1.818,5.247-1.818,9.251c0,4.015,0.564,7.084,1.676,9.122c1.24,2.232,2.921,3.278,5.284,3.278
       c2.779,0,4.631-1.06,5.831-3.333c1.175-2.21,1.769-5.231,1.769-8.987c0-3.964-0.755-7.154-2.245-9.481
       C142.17,49.298,140.452,48.384,137.948,48.384z"/>
                    <path d="M155.388,60.624c0,4-0.507,7.414-1.52,10.24
       c-1.174,3.468-3.028,6.148-5.56,8.04c-2.534,1.894-5.72,2.841-9.56,2.841c-1.868,0-3.6-0.375-5.2-1.121s-2.987-1.785-4.16-3.119
       c-0.107-0.106-0.2-0.133-0.28-0.08s-0.12,0.133-0.12,0.24v2.64c0,0.534-0.268,0.8-0.8,0.8h-6.08c-0.534,0-0.8-0.266-0.8-0.8v-54.4
       c0-0.532,0.266-0.8,0.8-0.8h6.08c0.532,0,0.8,0.268,0.8,0.8v17.841c0,0.107,0.04,0.188,0.12,0.239
       c0.08,0.054,0.172,0.028,0.28-0.08c1.173-1.333,2.573-2.36,4.2-3.08c1.626-0.72,3.346-1.08,5.16-1.08c4,0,7.28,0.987,9.84,2.96
       c2.56,1.974,4.4,4.72,5.52,8.24C154.96,53.665,155.388,56.892,155.388,60.624z M147.628,60.784c0-4.372-0.854-7.893-2.56-10.56
       c-1.547-2.56-3.92-3.841-7.12-3.841c-2.987,0-5.253,1.361-6.8,4.08c-1.388,2.455-2.08,5.868-2.08,10.24
       c0,4.374,0.64,7.734,1.92,10.08c1.6,2.881,3.946,4.32,7.04,4.32c3.52,0,6.053-1.467,7.6-4.4
       C146.96,68.198,147.628,64.892,147.628,60.784z"/>
                    <path d="M196.987,83.745c-4.264,0-7.883-1.09-10.758-3.239
       c-2.852-2.129-4.958-5.158-6.257-9.001c-1.075-2.995-1.625-6.667-1.625-10.881c0-3.919,0.461-7.377,1.372-10.278
       c1.243-3.905,3.33-7.006,6.207-9.225c2.908-2.241,6.629-3.376,11.062-3.376c2.085,0,4.093,0.421,5.969,1.251
       c0.624,0.276,1.221,0.593,1.791,0.949V25.904c0-1.648,1.151-2.8,2.8-2.8h6.08c1.649,0,2.8,1.151,2.8,2.8v54.4
       c0,1.648-1.151,2.8-2.8,2.8h-6.08c-1.262,0-2.232-0.674-2.618-1.729c-0.602,0.398-1.235,0.753-1.897,1.062
       C201.171,83.305,199.137,83.745,196.987,83.745z M197.787,48.384c-2.505,0-4.223,0.913-5.408,2.875
       c-1.517,2.37-2.271,5.56-2.271,9.525c0,3.758,0.594,6.779,1.766,8.98c1.202,2.281,3.055,3.34,5.834,3.34
       c2.363,0,4.044-1.046,5.292-3.291c1.052-1.922,1.589-4.99,1.589-9.109c0-4.106-0.585-7.22-1.739-9.253
       C201.657,49.359,200.048,48.384,197.787,48.384z"/>
                    <path d="M207.547,25.104h6.08c0.533,0,0.8,0.268,0.8,0.8v54.4
       c0,0.534-0.268,0.8-0.8,0.8h-6.08c-0.534,0-0.8-0.266-0.8-0.8v-2.64c0-0.107-0.04-0.188-0.12-0.24
       c-0.08-0.053-0.173-0.026-0.28,0.08c-1.174,1.334-2.56,2.373-4.16,3.119c-1.6,0.746-3.333,1.121-5.2,1.121
       c-3.84,0-7.028-0.947-9.56-2.841c-2.534-1.892-4.388-4.572-5.56-8.04c-1.014-2.826-1.52-6.24-1.52-10.24
       c0-3.732,0.426-6.959,1.28-9.68c1.12-3.52,2.96-6.266,5.52-8.24c2.56-1.973,5.84-2.96,9.84-2.96c1.813,0,3.532,0.36,5.16,1.08
       c1.626,0.72,3.026,1.747,4.2,3.08c0.106,0.108,0.2,0.134,0.28,0.08c0.08-0.052,0.12-0.132,0.12-0.239V25.904
       C206.747,25.372,207.014,25.104,207.547,25.104z M206.587,60.704c0-4.479-0.667-7.893-2-10.24c-1.548-2.719-3.814-4.08-6.8-4.08
       c-3.2,0-5.574,1.281-7.12,3.841c-1.708,2.667-2.56,6.188-2.56,10.56c0,4.107,0.666,7.414,2,9.92c1.546,2.934,4.08,4.4,7.6,4.4
       c3.093,0,5.44-1.439,7.04-4.32C205.974,68.544,206.587,65.185,206.587,60.704z"/>
                    <path d="M242.347,83.825c-4.264,0-7.938-0.968-10.918-2.876
       c-3.001-1.921-5.277-4.675-6.764-8.186c-1.382-3.397-2.078-7.5-2.078-12.22c0-4.122,0.313-7.209,0.959-9.436
       c1.059-4.063,3.248-7.368,6.491-9.771c3.22-2.384,7.146-3.593,11.67-3.593c5.914,0,10.457,1.559,13.501,4.632
       c2.979,3.008,4.811,7.404,5.446,13.065c0.223,2.284,0.307,4.838,0.252,7.622c0,1.61-1.151,2.762-2.799,2.762h-23.78
       c0.074,0.93,0.203,1.503,0.318,1.849l0.03,0.101c0.46,1.672,1.358,2.938,2.747,3.87c1.442,0.969,3.341,1.46,5.645,1.46
       c3.226,0,5.646-1.276,7.398-3.901c0.715-1.304,1.823-1.448,2.276-1.448c0.417,0,1.037,0.11,1.68,0.622l4.576,3.051l0.092,0.079
       c1.102,0.946,1.366,2.34,0.673,3.551c-1.723,2.77-4.131,4.926-7.195,6.473C249.549,83.054,246.11,83.825,242.347,83.825z
        M249.083,55.505c-0.095-0.89-0.197-1.432-0.278-1.756c-0.423-1.649-1.23-2.936-2.466-3.921c-1.222-0.972-2.738-1.444-4.634-1.444
       c-1.857,0-3.317,0.428-4.461,1.307c-1.152,0.885-1.915,2.045-2.332,3.548c-0.208,0.656-0.368,1.409-0.483,2.267H249.083z"/>
                    <path d="M258.906,63.024c0,0.533-0.268,0.801-0.8,0.801h-25.52
       c-0.214,0-0.32,0.107-0.32,0.319c0,1.813,0.16,3.2,0.479,4.16c0.587,2.134,1.772,3.8,3.561,5c1.786,1.2,4.04,1.8,6.76,1.8
       c3.946,0,6.986-1.627,9.12-4.88c0.267-0.532,0.612-0.612,1.04-0.24l4.56,3.04c0.373,0.32,0.453,0.668,0.24,1.04
       c-1.494,2.399-3.613,4.294-6.36,5.681c-2.747,1.386-5.854,2.08-9.319,2.08c-3.894,0-7.174-0.854-9.84-2.561
       c-2.668-1.707-4.668-4.133-6-7.28c-1.28-3.146-1.92-6.96-1.92-11.44c0-3.893,0.292-6.852,0.88-8.879
       c0.96-3.681,2.88-6.587,5.76-8.721c2.88-2.132,6.372-3.2,10.479-3.2c5.387,0,9.413,1.347,12.08,4.04
       c2.667,2.693,4.293,6.654,4.88,11.881C258.879,57.853,258.959,60.305,258.906,63.024z M236.026,48.104
       c-1.494,1.147-2.508,2.68-3.04,4.6c-0.374,1.174-0.613,2.668-0.72,4.48c0,0.214,0.106,0.32,0.32,0.32h18.319
       c0.213,0,0.32-0.106,0.32-0.32c-0.107-1.76-0.268-3.066-0.48-3.92c-0.533-2.08-1.587-3.746-3.159-5
       c-1.574-1.252-3.534-1.881-5.881-1.881C239.413,46.384,237.519,46.958,236.026,48.104z"/>
                    <path d="M277.867,83.104c-1.322,0-2.381-0.727-2.834-1.943l-13.087-39.337
       l-0.158-0.633v-0.246c0-1.272,0.934-2.56,2.72-2.56h6.72c1.321,0,2.38,0.726,2.833,1.94l0.04,0.118l7.119,23.426l7.072-23.485
       l0.023-0.063c0.455-1.212,1.515-1.937,2.832-1.937l6.744,0.08c1.213,0,1.875,0.625,2.16,0.999c0.287,0.376,0.719,1.189,0.386,2.409
       l-12.991,39.221c-0.48,1.287-1.539,2.012-2.858,2.012H277.867z"/>
                    <path d="M276.907,80.464l-13.04-39.199l-0.08-0.32
       c0-0.373,0.24-0.56,0.72-0.56h6.72c0.48,0,0.801,0.214,0.96,0.64l8.801,28.96c0.052,0.107,0.132,0.16,0.239,0.16
       c0.106,0,0.187-0.053,0.24-0.16l8.72-28.96c0.16-0.426,0.48-0.64,0.96-0.64l6.721,0.08c0.586,0,0.8,0.294,0.64,0.88l-12.96,39.119
       c-0.16,0.428-0.48,0.641-0.96,0.641h-6.72C277.387,81.104,277.066,80.892,276.907,80.464z"/>
                    <path d="M321.309,83.825c-4.264,0-7.938-0.968-10.918-2.876
       c-3.002-1.921-5.278-4.675-6.764-8.186c-1.383-3.396-2.078-7.499-2.078-12.22c0-4.124,0.313-7.211,0.959-9.436
       c1.059-4.063,3.247-7.368,6.49-9.771c3.22-2.384,7.146-3.593,11.67-3.593c5.914,0,10.456,1.559,13.501,4.632
       c2.979,3.008,4.811,7.404,5.446,13.065c0.223,2.284,0.307,4.838,0.253,7.622c0,1.61-1.151,2.762-2.8,2.762h-23.78
       c0.073,0.93,0.203,1.503,0.317,1.849l0.031,0.101c0.46,1.672,1.358,2.938,2.746,3.87c1.442,0.969,3.342,1.46,5.646,1.46
       c3.226,0,5.646-1.276,7.397-3.901c0.716-1.304,1.823-1.448,2.276-1.448c0.417,0,1.037,0.11,1.68,0.622l4.577,3.051l0.092,0.079
       c1.102,0.946,1.366,2.34,0.674,3.551c-1.724,2.77-4.132,4.926-7.195,6.473C328.511,83.054,325.072,83.825,321.309,83.825z
        M328.046,55.505c-0.096-0.89-0.197-1.432-0.278-1.756c-0.423-1.649-1.23-2.936-2.466-3.921c-1.222-0.972-2.738-1.444-4.634-1.444
       c-1.857,0-3.316,0.428-4.461,1.307c-1.152,0.885-1.915,2.045-2.331,3.548c-0.208,0.656-0.368,1.409-0.483,2.267H328.046z"/>
                    <path d="M337.868,63.024c0,0.533-0.268,0.801-0.8,0.801h-25.52
       c-0.214,0-0.32,0.107-0.32,0.319c0,1.813,0.16,3.2,0.479,4.16c0.587,2.134,1.772,3.8,3.561,5c1.786,1.2,4.04,1.8,6.76,1.8
       c3.946,0,6.986-1.627,9.12-4.88c0.267-0.532,0.612-0.612,1.04-0.24l4.56,3.04c0.373,0.32,0.453,0.668,0.24,1.04
       c-1.494,2.399-3.613,4.294-6.36,5.681c-2.747,1.386-5.854,2.08-9.319,2.08c-3.894,0-7.174-0.854-9.84-2.561
       c-2.668-1.707-4.668-4.133-6-7.28c-1.28-3.146-1.92-6.96-1.92-11.44c0-3.893,0.292-6.852,0.88-8.879
       c0.96-3.681,2.88-6.587,5.76-8.721c2.88-2.132,6.372-3.2,10.479-3.2c5.387,0,9.413,1.347,12.08,4.04
       c2.667,2.693,4.293,6.654,4.88,11.881C337.841,57.853,337.921,60.305,337.868,63.024z M314.988,48.104
       c-1.494,1.147-2.508,2.68-3.04,4.6c-0.374,1.174-0.613,2.668-0.72,4.48c0,0.214,0.106,0.32,0.32,0.32h18.319
       c0.213,0,0.32-0.106,0.32-0.32c-0.107-1.76-0.268-3.066-0.48-3.92c-0.533-2.08-1.587-3.746-3.159-5
       c-1.574-1.252-3.534-1.881-5.881-1.881C318.375,46.384,316.48,46.958,314.988,48.104z"/>
                    <path d="M348.348,83.104c-1.649,0-2.801-1.151-2.801-2.8v-54.4
       c0-1.648,1.151-2.8,2.801-2.8h6.08c1.648,0,2.8,1.151,2.8,2.8v54.4c0,1.648-1.151,2.8-2.8,2.8H348.348z"/>
                    <path d="M347.547,80.305v-54.4c0-0.532,0.267-0.8,0.801-0.8h6.08
       c0.532,0,0.8,0.268,0.8,0.8v54.4c0,0.534-0.268,0.8-0.8,0.8h-6.08C347.813,81.104,347.547,80.839,347.547,80.305z"/>
                    <path d="M382.986,83.745c-4.339,0-8.19-1.126-11.447-3.348
       c-3.293-2.245-5.626-5.404-6.934-9.39c-1.021-3.061-1.539-6.557-1.539-10.384c0-3.995,0.494-7.446,1.47-10.256
       c1.301-3.903,3.633-7.032,6.923-9.276c3.257-2.221,7.162-3.348,11.607-3.348c4.239,0,8.004,1.131,11.188,3.362
       c3.188,2.236,5.495,5.321,6.858,9.17c1.031,2.924,1.554,6.378,1.554,10.268c0,3.937-0.521,7.464-1.546,10.483
       c-1.301,3.961-3.602,7.116-6.833,9.36C391.078,82.615,387.276,83.745,382.986,83.745z M382.826,48.384
       c-1.758,0-3.224,0.458-4.479,1.4c-1.271,0.953-2.165,2.288-2.734,4.084c-0.521,1.657-0.786,3.958-0.786,6.836
       c0,2.885,0.267,5.218,0.792,6.935c0.525,1.796,1.398,3.114,2.675,4.057c1.285,0.948,2.82,1.409,4.693,1.409
       c1.705,0,3.145-0.458,4.399-1.399c1.27-0.952,2.164-2.288,2.734-4.086c0.517-1.789,0.786-4.132,0.786-6.915
       c0-2.793-0.246-5.12-0.73-6.919c-0.547-1.713-1.44-3.049-2.709-4C386.21,48.842,384.692,48.384,382.826,48.384z"/>
                    <path d="M372.666,78.745c-2.934-2-4.987-4.787-6.16-8.361
       c-0.96-2.879-1.439-6.132-1.439-9.76c0-3.785,0.452-6.986,1.359-9.6c1.173-3.52,3.227-6.279,6.16-8.28c2.933-2,6.427-3,10.48-3
       c3.84,0,7.186,1,10.04,3c2.853,2,4.893,4.733,6.12,8.2c0.96,2.721,1.439,5.92,1.439,9.6c0,3.734-0.479,7.014-1.439,9.84
       c-1.174,3.574-3.2,6.361-6.08,8.361c-2.881,2-6.268,3-10.16,3C379.039,81.745,375.599,80.745,372.666,78.745z M388.586,73.305
       c1.601-1.2,2.746-2.893,3.44-5.08c0.586-2.026,0.88-4.532,0.88-7.521c0-2.986-0.268-5.466-0.8-7.439
       c-0.694-2.187-1.841-3.881-3.44-5.08c-1.6-1.2-3.548-1.801-5.84-1.801c-2.188,0-4.08,0.601-5.68,1.801
       c-1.601,1.199-2.748,2.894-3.44,5.08c-0.588,1.867-0.88,4.348-0.88,7.439c0,3.094,0.292,5.601,0.88,7.521
       c0.64,2.188,1.772,3.88,3.4,5.08c1.626,1.2,3.586,1.8,5.88,1.8C385.118,75.104,386.986,74.505,388.586,73.305z"/>
                    <path d="M412.025,98.384c-1.648,0-2.8-1.151-2.8-2.799v-54.4
       c0-1.649,1.151-2.8,2.8-2.8h6.08c1.262,0,2.231,0.674,2.618,1.729c0.602-0.398,1.234-0.752,1.896-1.062
       c1.86-0.868,3.895-1.308,6.046-1.308c4.262,0,7.881,1.089,10.757,3.237c2.852,2.132,4.957,5.16,6.258,9
       c1.076,3.063,1.626,6.73,1.626,10.882c0,3.917-0.462,7.375-1.372,10.278c-1.241,3.96-3.332,7.08-6.217,9.274
       c-2.904,2.208-6.622,3.328-11.052,3.328c-2.082,0-4.09-0.421-5.968-1.251c-0.625-0.276-1.223-0.593-1.792-0.949v14.04
       c0,1.647-1.151,2.799-2.8,2.799H412.025z M427.945,48.384c-2.361,0-4.043,1.046-5.292,3.292c-1.107,1.985-1.668,5.049-1.668,9.108
       c0,4.099,0.606,7.201,1.802,9.222c1.207,2.124,2.814,3.099,5.078,3.099c2.505,0,4.224-0.913,5.408-2.874
       c1.523-2.291,2.272-5.471,2.272-9.526c0-3.753-0.595-6.775-1.767-8.981C432.576,49.443,430.723,48.384,427.945,48.384z"/>
                    <path d="M445.306,60.864c0,3.734-0.428,6.961-1.28,9.68
       c-1.12,3.574-2.96,6.334-5.52,8.281c-2.561,1.947-5.841,2.92-9.841,2.92c-1.813,0-3.533-0.361-5.159-1.08
       c-1.628-0.721-3.028-1.746-4.2-3.08c-0.107-0.107-0.2-0.133-0.28-0.08s-0.12,0.133-0.12,0.24v17.84c0,0.532-0.268,0.799-0.8,0.799
       h-6.08c-0.533,0-0.8-0.267-0.8-0.799v-54.4c0-0.533,0.267-0.8,0.8-0.8h6.08c0.532,0,0.8,0.268,0.8,0.8v2.641
       c0,0.107,0.04,0.188,0.12,0.239c0.08,0.054,0.173,0.027,0.28-0.08c1.172-1.333,2.56-2.373,4.16-3.12
       c1.6-0.746,3.332-1.12,5.199-1.12c3.841,0,7.026,0.947,9.561,2.84c2.532,1.893,4.386,4.574,5.56,8.04
       C444.798,53.505,445.306,56.919,445.306,60.864z M437.546,60.704c0-4.105-0.668-7.412-2-9.92c-1.548-2.932-4.08-4.4-7.601-4.4
       c-3.094,0-5.439,1.441-7.04,4.32c-1.279,2.294-1.92,5.654-1.92,10.08c0,4.48,0.692,7.895,2.08,10.24
       c1.546,2.721,3.813,4.08,6.8,4.08c3.2,0,5.573-1.279,7.12-3.84C436.691,68.704,437.546,65.185,437.546,60.704z"/>
                    <path d="M471.546,83.825c-4.264,0-7.938-0.968-10.918-2.876
       c-3.002-1.921-5.278-4.675-6.764-8.186c-1.383-3.396-2.078-7.499-2.078-12.22c0-4.124,0.313-7.211,0.959-9.436
       c1.059-4.063,3.247-7.368,6.49-9.771c3.22-2.384,7.146-3.593,11.67-3.593c5.914,0,10.456,1.559,13.501,4.632
       c2.979,3.008,4.811,7.404,5.446,13.065c0.223,2.284,0.307,4.838,0.253,7.622c0,1.61-1.151,2.762-2.8,2.762h-23.78
       c0.073,0.93,0.203,1.503,0.317,1.849l0.031,0.101c0.46,1.672,1.358,2.938,2.746,3.87c1.442,0.969,3.342,1.46,5.646,1.46
       c3.226,0,5.646-1.276,7.397-3.901c0.716-1.304,1.823-1.448,2.276-1.448c0.417,0,1.037,0.11,1.68,0.622l4.577,3.051l0.092,0.079
       c1.102,0.946,1.366,2.34,0.674,3.551c-1.724,2.77-4.132,4.926-7.195,6.473C478.748,83.054,475.31,83.825,471.546,83.825z
        M478.283,55.505c-0.096-0.89-0.197-1.432-0.278-1.756c-0.423-1.649-1.23-2.936-2.466-3.921c-1.222-0.972-2.738-1.444-4.634-1.444
       c-1.857,0-3.316,0.428-4.461,1.307c-1.152,0.885-1.915,2.045-2.331,3.548c-0.208,0.656-0.368,1.409-0.483,2.267H478.283z"/>
                    <path d="M488.105,63.024c0,0.533-0.268,0.801-0.8,0.801h-25.52
       c-0.214,0-0.32,0.107-0.32,0.319c0,1.813,0.16,3.2,0.479,4.16c0.587,2.134,1.772,3.8,3.561,5c1.786,1.2,4.04,1.8,6.76,1.8
       c3.946,0,6.986-1.627,9.12-4.88c0.267-0.532,0.612-0.612,1.04-0.24l4.56,3.04c0.373,0.32,0.453,0.668,0.24,1.04
       c-1.494,2.399-3.613,4.294-6.36,5.681c-2.747,1.386-5.854,2.08-9.319,2.08c-3.894,0-7.174-0.854-9.84-2.561
       c-2.668-1.707-4.668-4.133-6-7.28c-1.28-3.146-1.92-6.96-1.92-11.44c0-3.893,0.292-6.852,0.88-8.879
       c0.96-3.681,2.88-6.587,5.76-8.721c2.88-2.132,6.372-3.2,10.479-3.2c5.387,0,9.413,1.347,12.08,4.04
       c2.667,2.693,4.293,6.654,4.88,11.881C488.078,57.853,488.158,60.305,488.105,63.024z M465.226,48.104
       c-1.494,1.147-2.508,2.68-3.04,4.6c-0.374,1.174-0.613,2.668-0.72,4.48c0,0.214,0.106,0.32,0.32,0.32h18.319
       c0.213,0,0.32-0.106,0.32-0.32c-0.107-1.76-0.268-3.066-0.48-3.92c-0.533-2.08-1.587-3.746-3.159-5
       c-1.574-1.252-3.534-1.881-5.881-1.881C468.612,46.384,466.718,46.958,465.226,48.104z"/>
                    <path d="M498.586,83.104c-1.649,0-2.801-1.151-2.801-2.8v-39.12
       c0-1.649,1.151-2.8,2.801-2.8h6.08c1.494,0,2.58,0.946,2.771,2.352c2.295-1.829,5.034-2.751,8.189-2.751
       c1.992,0,3.84,0.414,5.493,1.231c1.219,0.557,1.807,1.805,1.5,3.198l-1.263,5.917c-0.201,1.298-1.229,2.193-2.541,2.193
       c-0.295,0-0.595-0.043-0.917-0.131l-0.118-0.032l-0.112-0.047c-0.649-0.266-1.447-0.403-2.374-0.41l-1.046,0.075
       c-2.064,0.089-3.657,0.749-4.929,2.02c-1.247,1.247-1.854,2.865-1.854,4.945v23.36c0,1.648-1.151,2.8-2.8,2.8H498.586z"/>
                    <path id='r' d="M520.266,41.024c0.372,0.16,0.506,0.48,0.4,0.96l-1.28,6
       c-0.054,0.479-0.374,0.64-0.96,0.479c-0.908-0.372-1.974-0.56-3.2-0.56l-1.12,0.08c-2.508,0.107-4.573,0.974-6.2,2.601
       s-2.439,3.747-2.439,6.359v23.36c0,0.534-0.268,0.8-0.8,0.8h-6.08c-0.534,0-0.801-0.266-0.801-0.8v-39.12
       c0-0.533,0.267-0.8,0.801-0.8h6.08c0.532,0,0.8,0.268,0.8,0.8v4.24c0,0.16,0.04,0.254,0.12,0.279
       c0.08,0.027,0.146-0.012,0.199-0.119c2.4-3.733,5.681-5.601,9.841-5.601C517.332,39.984,518.878,40.332,520.266,41.024z"/>
                </g>
            </svg>
        </div>;
    }

};

export default Svg;