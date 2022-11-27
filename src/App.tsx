import React from 'react'
import './App.css'

function App() {
    return (
        <div className='App-header'>

            <div className='container'>
                <p>About me:</p>
                <span className='description'>Hey, my name is Artyom and someday I will make this page and my others projects.</span>
            </div>

            <div className='container'>
                <p>My projects</p>
                <ul>
                    <li><a href='https://chat-react-app-d58b1.web.app/' target='_blank' rel='noreferrer' className='App-link'>Chat App</a></li>
                    <li><a href='https://network-opd.web.app/' target='_blank' rel='noreferrer' className='App-link'>Network</a></li>
                    <li><a href='https://heart-summer.web.app/' target='_blank' rel='noreferrer' className='App-link'>WTF</a></li>
                </ul>
            </div>

            <div className='container'>
                <p>You can also find me here</p>
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="NvW_RwTAona1rlOp72mkqa" x1="24" x2="24" y1="42" y2="6.207" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1ac8fc"/><stop offset=".258" stop-color="#1bb6fa"/><stop offset=".775" stop-color="#1c86f5"/><stop offset="1" stop-color="#1d70f2"/></linearGradient><path fill="url(#NvW_RwTAona1rlOp72mkqa)" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"/><path d="M34,16c0.178,0,0.347,0.031,0.512,0.074l-7.824,7.825C25.946,24.64,24.973,25.01,24,25.01 s-1.946-0.37-2.688-1.111l-7.824-7.825C13.653,16.031,13.822,16,14,16H34 M35.926,17.488C35.969,17.653,36,17.822,36,18v12 c0,0.178-0.031,0.347-0.074,0.512L29.414,24L35.926,17.488 M12.074,17.488L18.586,24l-6.511,6.511C12.031,30.347,12,30.178,12,30 V18C12,17.822,12.031,17.653,12.074,17.488 M27.99,25.404l6.522,6.522C34.347,31.969,34.178,32,34,32H14 c-0.178,0-0.347-0.031-0.512-0.074l6.522-6.522c1.117,1.063,2.55,1.605,3.99,1.605S26.873,26.467,27.99,25.404 M34,15H14 c-0.244,0-0.495,0.035-0.768,0.108c-0.346,0.092-0.616,0.361-0.709,0.707c-0.092,0.341,0.003,0.704,0.248,0.956 c-0.189-0.183-0.44-0.283-0.697-0.283c-0.087,0-0.174,0.011-0.26,0.034c-0.345,0.093-0.615,0.363-0.707,0.709 C11.035,17.505,11,17.756,11,18v12c0,0.244,0.035,0.495,0.108,0.768c0.092,0.346,0.361,0.616,0.707,0.709 c0.086,0.023,0.173,0.034,0.26,0.034c0.257,0,0.508-0.099,0.696-0.282c-0.245,0.253-0.34,0.616-0.248,0.956 c0.093,0.345,0.363,0.615,0.709,0.707C13.505,32.965,13.756,33,14,33h20c0.244,0,0.495-0.035,0.768-0.108 c0.346-0.092,0.616-0.361,0.709-0.707c0.092-0.341-0.003-0.704-0.248-0.956c0.189,0.183,0.44,0.282,0.696,0.282 c0.087,0,0.174-0.011,0.26-0.034c0.345-0.093,0.615-0.363,0.707-0.709C36.965,30.495,37,30.244,37,30V18 c0-0.244-0.035-0.495-0.108-0.768c-0.092-0.346-0.361-0.616-0.707-0.709c-0.086-0.023-0.173-0.034-0.26-0.034 c-0.257,0-0.508,0.099-0.697,0.282c0.245-0.253,0.34-0.616,0.248-0.956c-0.093-0.345-0.363-0.615-0.709-0.707 C34.495,15.035,34.244,15,34,15L34,15z" opacity=".05"/><path d="M34,15.5H14c-0.203,0-0.406,0.029-0.64,0.091c-0.173,0.046-0.308,0.181-0.354,0.353 c-0.046,0.173,0.003,0.357,0.129,0.483l7.824,7.825C21.77,25.063,22.85,25.51,24,25.51s2.23-0.447,3.041-1.257l7.824-7.825 c0.126-0.126,0.176-0.311,0.129-0.483c-0.046-0.173-0.182-0.307-0.354-0.353C34.406,15.529,34.203,15.5,34,15.5L34,15.5z M35.926,16.988c-0.131,0-0.259,0.051-0.354,0.146l-6.511,6.512c-0.195,0.195-0.195,0.512,0,0.707l6.511,6.511 c0.095,0.095,0.223,0.146,0.354,0.146c0.043,0,0.087-0.006,0.13-0.017c0.173-0.046,0.307-0.182,0.353-0.354 C36.471,30.406,36.5,30.203,36.5,30V18c0-0.203-0.029-0.406-0.091-0.64c-0.046-0.173-0.181-0.308-0.353-0.354 C36.013,16.994,35.969,16.988,35.926,16.988L35.926,16.988z M12.074,16.988c-0.043,0-0.087,0.006-0.13,0.017 c-0.173,0.046-0.307,0.182-0.353,0.354C11.529,17.594,11.5,17.797,11.5,18v12c0,0.203,0.029,0.406,0.091,0.64 c0.046,0.173,0.181,0.308,0.353,0.354c0.043,0.012,0.087,0.017,0.13,0.017c0.131,0,0.259-0.051,0.354-0.146l6.511-6.511 c0.195-0.195,0.195-0.512,0-0.707l-6.511-6.512C12.333,17.04,12.205,16.988,12.074,16.988L12.074,16.988z M27.99,24.904 c-0.124,0-0.248,0.046-0.345,0.138c-0.995,0.946-2.289,1.467-3.645,1.467s-2.651-0.521-3.645-1.467 c-0.097-0.092-0.221-0.138-0.345-0.138c-0.128,0-0.256,0.049-0.354,0.146l-6.522,6.522c-0.126,0.126-0.176,0.311-0.129,0.483 s0.182,0.307,0.354,0.353C13.594,32.471,13.797,32.5,14,32.5h20c0.203,0,0.406-0.029,0.64-0.091 c0.173-0.046,0.308-0.181,0.354-0.353s-0.003-0.357-0.129-0.483l-6.522-6.522C28.246,24.953,28.118,24.904,27.99,24.904 L27.99,24.904z" opacity=".07"/><path fill="#f9f9f9" d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M12.074,17.488 C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512L18.586,24L12.074,17.488z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z"/></svg>
                        <a href='https://mail.ru' target='_blank' rel='noreferrer' className='App-link li-vertical' >Mail</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="rL2wppHyxHVbobwndsT6Ca" x1="4" x2="44" y1="23.508" y2="23.508" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c4c4c"/><stop offset="1" stop-color="#343434"/></linearGradient><path fill="url(#rL2wppHyxHVbobwndsT6Ca)" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"/><path d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z" opacity=".05"/><path d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z" opacity=".07"/><path fill="#fff" d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"/></svg>
                        <a href="https://github.io" target='_blank' rel='noreferrer' className='App-link li-vertical'>Github</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="BiF7D16UlC0RZ_VqXJHnXa" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"/><stop offset="1" stop-color="#0a85d9"/></linearGradient><path fill="url(#BiF7D16UlC0RZ_VqXJHnXa)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"/><path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"/><path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"/></svg>
                        <a href='https://t.me/artyless' target='_blank' rel='noreferrer' className='App-link li-vertical'>Telegram</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                        <a href='https://instagram.com/artyless' target='_blank' rel='noreferrer' className='App-link li-vertical'>Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default App
