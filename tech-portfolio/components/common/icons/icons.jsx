import React from 'react';

const Icon = ({ size, name, color }) => {
    return name === 'facebook' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M30 14.5C30 6.492 23.284 0 15 0 6.716 0 0 6.492 0 14.5c0 7.237 5.485 13.236 12.656 14.324V18.69H8.848V14.5h3.808v-3.194c0-3.635 2.24-5.642 5.666-5.642 1.64 0 3.358.283 3.358.283v3.569h-1.892c-1.863 0-2.444 1.117-2.444 2.265V14.5h4.16l-.665 4.191h-3.495v10.133C24.514 27.736 30 21.737 30 14.5z"
                fill={color}
            />
        </svg>
    ) : name === 'instagram' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.5 2.611c3.874 0 4.333.017 5.857.085 1.416.062 2.18.3 2.69.499.674.26 1.161.577 1.665 1.081.51.51.822.992 1.082 1.666.198.51.436 1.28.499 2.69.067 1.53.085 1.988.085 5.857 0 3.874-.018 4.333-.085 5.856-.063 1.416-.3 2.181-.499 2.69a4.483 4.483 0 01-1.082 1.666 4.46 4.46 0 01-1.665 1.082c-.51.198-1.28.436-2.69.498-1.53.068-1.988.085-5.857.085-3.874 0-4.333-.017-5.857-.085-1.416-.062-2.18-.3-2.69-.498A4.484 4.484 0 014.288 24.7a4.46 4.46 0 01-1.082-1.665c-.198-.51-.436-1.28-.499-2.69-.068-1.53-.085-1.989-.085-5.857 0-3.875.017-4.333.085-5.857.063-1.416.3-2.18.499-2.69a4.484 4.484 0 011.082-1.666 4.46 4.46 0 011.665-1.081c.51-.199 1.28-.437 2.69-.499 1.524-.068 1.983-.085 5.857-.085zM14.5 0c-3.937 0-4.43.017-5.976.085-1.54.068-2.6.317-3.517.674a7.077 7.077 0 00-2.571 1.677A7.105 7.105 0 00.759 5C.402 5.925.153 6.978.085 8.52.017 10.07 0 10.563 0 14.5c0 3.936.017 4.43.085 5.976.068 1.54.317 2.6.674 3.517a7.077 7.077 0 001.677 2.572A7.088 7.088 0 005 28.234c.924.357 1.977.606 3.518.674 1.546.068 2.039.085 5.975.085 3.937 0 4.43-.017 5.976-.085 1.54-.068 2.6-.317 3.517-.674a7.088 7.088 0 002.566-1.67 7.087 7.087 0 001.671-2.566c.357-.924.606-1.977.674-3.518.068-1.546.085-2.039.085-5.975 0-3.937-.017-4.43-.085-5.976-.068-1.54-.317-2.6-.674-3.517a6.792 6.792 0 00-1.66-2.577A7.088 7.088 0 0024 .765C23.075.408 22.022.159 20.48.09 18.93.017 18.436 0 14.5 0z"
                fill={color}
            />
            <path
                d="M14.5 7.052A7.45 7.45 0 007.052 14.5a7.45 7.45 0 007.448 7.448 7.45 7.45 0 007.448-7.448A7.45 7.45 0 0014.5 7.052zm0 12.28a4.832 4.832 0 11.001-9.665 4.832 4.832 0 01-.001 9.664zM23.982 6.757a1.74 1.74 0 11-3.479 0 1.74 1.74 0 013.479 0z"
                fill={color}
            />
        </svg>
    ) : name === 'linkedin' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M26.853 0H2.141C.957 0 0 .935 0 2.09v24.814C0 28.06.957 29 2.141 29h24.712C28.037 29 29 28.06 29 26.91V2.09C29 .935 28.037 0 26.853 0zM8.603 24.712H4.3V10.87h4.305v13.843zM6.452 8.983a2.493 2.493 0 01-2.497-2.492A2.493 2.493 0 016.45 3.999a2.492 2.492 0 010 4.984zm18.261 15.73h-4.299v-6.73c0-1.602-.028-3.67-2.237-3.67-2.237 0-2.577 1.75-2.577 3.557v6.842h-4.293V10.87h4.123v1.892h.056c.573-1.087 1.977-2.237 4.067-2.237 4.356 0 5.16 2.866 5.16 6.593v7.595z"
                fill={color}
            />
        </svg>
    ) : name === 'twitter' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0)">
                <path
                    d="M9.123 26.281c10.94 0 16.927-9.066 16.927-16.926 0-.255-.006-.516-.017-.77A12.083 12.083 0 0029 5.504a11.73 11.73 0 01-3.415.934 5.982 5.982 0 002.616-3.29 11.96 11.96 0 01-3.776 1.443 5.957 5.957 0 00-10.143 5.426 16.899 16.899 0 01-12.26-6.212 5.956 5.956 0 001.84 7.939 5.957 5.957 0 01-2.695-.742v.074A5.947 5.947 0 005.94 16.91a5.914 5.914 0 01-2.684.102 5.962 5.962 0 005.556 4.134A11.933 11.933 0 010 23.61a16.88 16.88 0 009.123 2.672z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill={color} d="M0 0h29v29H0z" />
                </clipPath>
            </defs>
        </svg>
    ) : name === 'youtube' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M29.701 8.7s-.293-2-1.195-2.877c-1.143-1.156-2.42-1.161-3.006-1.23C21.305 4.3 15.006 4.3 15.006 4.3h-.012s-6.299 0-10.494.295c-.586.068-1.863.073-3.006 1.229C.592 6.7.304 8.7.304 8.7S0 11.05 0 13.396v2.197c0 2.345.299 4.696.299 4.696s.293 2 1.19 2.877c1.142 1.155 2.642 1.116 3.31 1.24 2.402.221 10.201.29 10.201.29s6.305-.012 10.5-.3c.586-.069 1.863-.075 3.006-1.23.902-.878 1.195-2.877 1.195-2.877S30 17.944 30 15.593v-2.197c0-2.345-.299-4.696-.299-4.696zm-17.8 9.561v-8.15l8.103 4.089L11.9 18.26z"
                fill={color}
            />
        </svg>
    ) : name === 'personcircle' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0z" 
                fill={color}
            />
            <path
                // fillRule="evenodd"
                d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-7a7 7 0 00-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 008 1z"
                fill={color}
            />
        </svg>
    ) : name === 'peoplefill' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6z" 
            fill={color} 
            />
            <path
                fillRule="evenodd"
                d="M5.216 14A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                fill={color}
            />
            <path d="M4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" 
               fill={color}
            />


        </svg>
    ) : name === 'playcircle' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" fill={color} />
            <path d="M6.271 5.055a.5.5 0 01.52.038l3.5 2.5a.5.5 0 010 .814l-3.5 2.5A.5.5 0 016 10.5v-5a.5.5 0 01.271-.445z" 
                fill={color}
            />
        </svg>
    ) : name === 'playcirclefill' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.79 5.093A.5.5 0 006 5.5v5a.5.5 0 00.79.407l3.5-2.5a.5.5 0 000-.814l-3.5-2.5z" 
                fill={color}
            />
        </svg>
    ) : name === 'arrowrightcircle' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z"
                fill={color}
            />
        </svg>
    ) : name === 'ArrowRightCircleFill' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z" 
                fill={color}
             />
        </svg>
    ) : name === 'envelope' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <path d="M17.388 4.751H2.613a.39.39 0 00-.389.389v9.72c0 .216.175.389.389.389h14.775a.389.389 0 00.389-.389V5.14a.39.39 0 00-.389-.389m-.94.779L10 11.984 3.552 5.53h12.896zm-13.446.551l3.921 3.925-3.921 3.925v-7.85zm.558 8.39l3.914-3.916 2.253 2.253a.385.385 0 00.548 0l2.253-2.253 3.913 3.916H3.56zm13.439-.54l-3.921-3.925 3.921-3.925v7.85z" 
                fill={color}
             />
        </svg>
    ) : name === 'mail' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <path d="M17.051 3.302H2.949c-.866 0-1.567.702-1.567 1.567v10.184c0 .865.701 1.568 1.567 1.568h14.102c.865 0 1.566-.703 1.566-1.568V4.869c0-.866-.701-1.567-1.566-1.567zm.783 11.751c0 .434-.35.783-.783.783H2.949a.783.783 0 01-.784-.783V4.869c0-.433.351-.784.784-.784h14.102c.434 0 .783.351.783.784v10.184zm-1.957-9.691L10 9.179 4.123 5.362a.392.392 0 00-.427.657L9.61 9.86a.39.39 0 00.39.014.387.387 0 00.39-.014l5.915-3.841a.394.394 0 00.115-.542.394.394 0 00-.543-.115z"
             fill={color}
             />
        </svg>
    ) : name === 'sendArrow' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <path d="M17.218 2.268L2.477 8.388c-.347.147-.313.662.065.746L9.33 10.67l1.535 6.787c.083.377.602.415.745.065l6.123-14.74a.395.395 0 00-.515-.514M3.92 8.641l11.772-4.89-6.157 6.158L3.92 8.641zm7.438 7.437l-1.268-5.613 6.157-6.157-4.889 11.77z" 
                fill={color}
             />
        </svg>
    ) : name === 'phoneDial' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <path fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 010 .708L11.707 5H14.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v2.793L15.146.146a.5.5 0 01.708 0z" 
                fill={color}
             />
        </svg>
    ) : name === 'location' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z" 
                fill={color}
             />
        </svg>
    ) : name === 'mobilePhone' ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <path d="M4 4a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm5 7a1 1 0 10-2 0 1 1 0 002 0zM1.807 4.734a.5.5 0 10-.884-.468A7.967 7.967 0 000 8c0 1.347.334 2.618.923 3.734a.5.5 0 10.884-.468A6.967 6.967 0 011 8c0-1.18.292-2.292.807-3.266zm13.27-.468a.5.5 0 00-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 00.884.468A7.967 7.967 0 0016 8a7.967 7.967 0 00-.923-3.734zM3.34 6.182a.5.5 0 10-.93-.364A5.986 5.986 0 002 8c0 .769.145 1.505.41 2.182a.5.5 0 10.93-.364A4.986 4.986 0 013 8c0-.642.12-1.255.34-1.818zm10.25-.364a.5.5 0 00-.93.364c.22.563.34 1.176.34 1.818 0 .642-.12 1.255-.34 1.818a.5.5 0 00.93.364C13.856 9.505 14 8.769 14 8c0-.769-.145-1.505-.41-2.182z" 
                fill={color}
             />
        </svg>
    ) : name === 'AccountIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 01.416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 018 10.342a4.185 4.185 0 012.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 018 14.993zm-2.448-7.4a2.49 2.49 0 01-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 01-.576.848 2.84 2.84 0 01-.848.575 2.715 2.715 0 01-2.064 0 2.84 2.84 0 01-.848-.575 2.526 2.526 0 01-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 00-.688-1.406 4.883 4.883 0 00-1.088-1.135 5.207 5.207 0 00-1.04-.608 2.82 2.82 0 00.464-.383 4.2 4.2 0 00.624-.784 3.624 3.624 0 00.528-1.934 3.71 3.71 0 00-.288-1.47 3.799 3.799 0 00-.816-1.199 3.845 3.845 0 00-1.2-.8 3.72 3.72 0 00-1.472-.287 3.72 3.72 0 00-1.472.288 3.631 3.631 0 00-1.2.815 3.84 3.84 0 00-.8 1.199 3.71 3.71 0 00-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 00-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 00-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 01-2.032 4.907z" />
    </svg>
    ) : name === 'BellIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M13.377 10.573a7.63 7.63 0 01-.383-2.38V6.195a5.115 5.115 0 00-1.268-3.446 5.138 5.138 0 00-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 00-1.208 1.675 5.067 5.067 0 00-.431 2.022v2.2a7.61 7.61 0 01-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 01-.705.299.997.997 0 01-.706-.3.997.997 0 01-.3-.705h1.999a.939.939 0 01-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 00.443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 012.597 1.4 4.133 4.133 0 011.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z" />
    </svg>
    ) : name === 'CheckIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>
    ) : name === 'ChevronRight' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>
    ) : name === 'CodeIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z" />
    </svg>
    ) : name === 'CommentIcon' ? (
        <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M162.133 204.8h51.2c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-51.2c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM401.067 187.733h-153.6c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h153.6c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM375.467 247.467A8.536 8.536 0 00384 256h34.133c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H384c-4.71-.001-8.533 3.822-8.533 8.533zM162.133 256h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z" />
      <path d="M42.667 324.267c-14.114 0-25.6-11.486-25.6-25.6v-256c0-14.114 11.486-25.6 25.6-25.6h358.4c14.114 0 25.6 11.486 25.6 25.6V76.8c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533V42.667C443.733 19.14 424.593 0 401.067 0h-358.4C19.14 0 0 19.14 0 42.667v256c0 23.526 19.14 42.667 42.667 42.667a8.536 8.536 0 008.533-8.533c0-4.711-3.823-8.534-8.533-8.534zM315.733 307.2h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z" />
      <path d="M469.333 102.4h-358.4c-23.526 0-42.667 19.14-42.667 42.667v256c0 23.526 19.14 42.667 42.667 42.667h213.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H110.933c-14.114 0-25.6-11.486-25.6-25.6v-256c0-14.114 11.486-25.6 25.6-25.6h358.4c14.114 0 25.6 11.486 25.6 25.6v256c0 14.114-11.486 25.6-25.6 25.6H435.2a8.536 8.536 0 00-8.533 8.533v47.667L355.9 412.1a8.523 8.523 0 00-12.066 0 8.523 8.523 0 000 12.066l85.333 85.333a8.535 8.535 0 009.301 1.852 8.547 8.547 0 005.265-7.885v-59.733h25.6c23.526 0 42.667-19.14 42.667-42.667v-256c0-23.526-19.14-42.666-42.667-42.666z" />
      <path d="M162.133 307.2H281.6c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H162.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM332.8 358.4h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H332.8c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM358.4 247.467a8.536 8.536 0 00-8.533-8.533H281.6c-4.71 0-8.533 3.823-8.533 8.533S276.89 256 281.6 256h68.267a8.536 8.536 0 008.533-8.533zM162.133 358.4h136.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H162.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z" />
    </svg>
    ) : name === 'ErrorIcon' ? (
        <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M162.133 204.8h51.2c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-51.2c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM401.067 187.733h-153.6c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h153.6c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM375.467 247.467A8.536 8.536 0 00384 256h34.133c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H384c-4.71-.001-8.533 3.822-8.533 8.533zM162.133 256h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z" />
      <path d="M42.667 324.267c-14.114 0-25.6-11.486-25.6-25.6v-256c0-14.114 11.486-25.6 25.6-25.6h358.4c14.114 0 25.6 11.486 25.6 25.6V76.8c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533V42.667C443.733 19.14 424.593 0 401.067 0h-358.4C19.14 0 0 19.14 0 42.667v256c0 23.526 19.14 42.667 42.667 42.667a8.536 8.536 0 008.533-8.533c0-4.711-3.823-8.534-8.533-8.534zM315.733 307.2h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z" />
      <path d="M469.333 102.4h-358.4c-23.526 0-42.667 19.14-42.667 42.667v256c0 23.526 19.14 42.667 42.667 42.667h213.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H110.933c-14.114 0-25.6-11.486-25.6-25.6v-256c0-14.114 11.486-25.6 25.6-25.6h358.4c14.114 0 25.6 11.486 25.6 25.6v256c0 14.114-11.486 25.6-25.6 25.6H435.2a8.536 8.536 0 00-8.533 8.533v47.667L355.9 412.1a8.523 8.523 0 00-12.066 0 8.523 8.523 0 000 12.066l85.333 85.333a8.535 8.535 0 009.301 1.852 8.547 8.547 0 005.265-7.885v-59.733h25.6c23.526 0 42.667-19.14 42.667-42.667v-256c0-23.526-19.14-42.666-42.667-42.666z" />
      <path d="M162.133 307.2H281.6c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H162.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM332.8 358.4h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H332.8c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM358.4 247.467a8.536 8.536 0 00-8.533-8.533H281.6c-4.71 0-8.533 3.823-8.533 8.533S276.89 256 281.6 256h68.267a8.536 8.536 0 008.533-8.533zM162.133 358.4h136.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H162.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z" />
    </svg>
    ) : name === 'EyeIcon' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <g fill="currentColor">
          <path d="M34 256l26.2 26.2c108 108 283.7 108 391.7 0L478 256l-26.2-26.2c-108-108-283.7-108-391.7 0L34 256zm222 126.2c-75.8 0-151.6-28.9-209.3-86.6l-32.9-32.9c-3.7-3.7-3.7-9.7 0-13.5l32.9-32.9c115.4-115.4 303.2-115.4 418.6 0l32.9 32.9c3.7 3.7 3.7 9.7 0 13.5l-32.9 32.9c-57.7 57.7-133.5 86.6-209.3 86.6z" />
          <path d="M256 183.5c-40 0-72.5 32.5-72.5 72.5s32.5 72.5 72.5 72.5 72.5-32.5 72.5-72.5-32.5-72.5-72.5-72.5zm0 164c-50.5 0-91.5-41.1-91.5-91.5 0-50.5 41.1-91.5 91.5-91.5s91.5 41.1 91.5 91.5c0 50.5-41 91.5-91.5 91.5z" />
        </g>
      </svg>
    ) : name === 'FilesIcon' ? (
        <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" />
    </svg>
    ) : name === 'ForkIcon' ? (
        <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-view-component="true"
      height={16}
      width={16}
      {...props}
    >
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
      />
    </svg>
    ) : name === 'GitCompareIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.389 12.99l-1.27-1.27.67-.7 2.13 2.13v.7l-2.13 2.13-.71-.71L7.349 14h-1.85a2.49 2.49 0 01-2.5-2.5V5.95a2.59 2.59 0 01-1.27-.68 2.52 2.52 0 01-.54-2.73A2.5 2.5 0 013.499 1a2.45 2.45 0 011 .19 2.48 2.48 0 011.35 1.35c.133.317.197.658.19 1a2.5 2.5 0 01-2 2.45v5.5a1.5 1.5 0 001.5 1.5h1.85zm-4.68-8.25a1.5 1.5 0 002.08-2.08 1.55 1.55 0 00-.68-.56 1.49 1.49 0 00-.86-.08 1.49 1.49 0 00-1.18 1.18 1.49 1.49 0 00.08.86c.117.277.311.513.56.68zm10.33 6.3c.48.098.922.335 1.27.68a2.51 2.51 0 01.31 3.159 2.5 2.5 0 11-3.47-3.468c.269-.182.571-.308.89-.37V5.49a1.5 1.5 0 00-1.5-1.5h-1.85l1.27 1.27-.71.71-2.13-2.13v-.7l2.13-2.13.71.71-1.27 1.27h1.85a2.49 2.49 0 012.5 2.5v5.55zm-.351 3.943a1.5 1.5 0 001.1-2.322 1.55 1.55 0 00-.68-.56 1.49 1.49 0 00-.859-.08 1.49 1.49 0 00-1.18 1.18 1.49 1.49 0 00.08.86 1.5 1.5 0 001.539.922z"
      />
    </svg>
    ) : name === 'GithubIcon' ? (
        <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z" />
    </svg>
    ) : name === 'HeartIcon' ? (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490.4 490.4"
      fill="currentColor"
      {...props}
    >
      <path d="M222.5 453.7c6.1 6.1 14.3 9.5 22.9 9.5 8.5 0 16.9-3.5 22.9-9.5L448 274c27.3-27.3 42.3-63.6 42.4-102.1 0-38.6-15-74.9-42.3-102.2S384.6 27.4 346 27.4c-37.9 0-73.6 14.5-100.7 40.9-27.2-26.5-63-41.1-101-41.1-38.5 0-74.7 15-102 42.2C15 96.7 0 133 0 171.6c0 38.5 15.1 74.8 42.4 102.1l180.1 180zM59.7 86.8c22.6-22.6 52.7-35.1 84.7-35.1s62.2 12.5 84.9 35.2l7.4 7.4c2.3 2.3 5.4 3.6 8.7 3.6 3.2 0 6.4-1.3 8.7-3.6l7.2-7.2c22.7-22.7 52.8-35.2 84.9-35.2 32 0 62.1 12.5 84.7 35.1 22.7 22.7 35.1 52.8 35.1 84.8s-12.5 62.1-35.2 84.8L251 436.4c-2.9 2.9-8.2 2.9-11.2 0l-180-180c-22.7-22.7-35.2-52.8-35.2-84.8s12.5-62.1 35.1-84.8z" />
    </svg>
    ) : name === 'LinkIcon' ? (
        <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-view-component="true"
        height={16}
        width={16}
        {...props}
      >
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        />
      </svg>
    ) : name === 'MailIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"
      />
    </svg>
    ) : name === 'PencilIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z" />
    </svg>
    ) : name === 'SettingsIcon' ? (
        <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z"
      />
    </svg>
    ) : name === 'StartIcon' ? (
        <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-view-component="true"
      height={16}
      width={16}
      {...props}
    >
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      />
    </svg>
    ) : name === 'VercelIcon' ? (
        <svg height={16} viewBox="0 0 72 72" fill="currentColor" {...props}>
            <path d="M37.59.25l36.95 64H.64l36.95-64z" />
        </svg>
    ) : name === 'WarningIcon' ? (
        <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"
      />
    </svg>
    ) : name === 'WatchIcon' ? (
        <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-view-component="true"
      height={16}
      width={16}
      {...props}
    >
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
    ) : null;
};

export default Icon;

Icon.prototype = {
    size: PropTypes.number,
    name: PropTypes.string,
    color: (PropTypes.string = 'danger' | 'success' | 'purple' | 'primary')
};

Icon.defaultProps = {
    name: '',
    size: 25,
    color: 'white'
};
