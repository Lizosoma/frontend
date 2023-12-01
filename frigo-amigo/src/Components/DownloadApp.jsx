import bg from "../Pictures/DownloadBG.png"
import qr from "../Pictures/QRcode.png"


const DownloadApp = () => {
    return(
        <div className="container">
            <div className="download-block">
                <img src={bg} alt="background" className="download-bg"></img>
                <div className="download-heading nextart-700">Скачай <br/> Приложение</div>
                <img src={qr} alt="qrCode" className="download-qr"></img>
                <div className="download-texts manrope-400">
                    <div className="download-text1">Чтобы заполнить свой </div>
                    <div className="download-text2 nextart-700">собственный</div>
                    <div className="download-text3 ">холодильник!</div>
                </div>
                <div className="download-google-play">
                    <svg width="331" height="98" viewBox="0 0 331 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M318.741 1.96C321.472 1.96 324.091 3.04412 326.022 4.97387C327.954 6.90362 329.039 9.52092 329.039 12.25V85.75C329.039 88.4791 327.954 91.0964 326.022 93.0261C324.091 94.9559 321.472 96.04 318.741 96.04H12.2593C9.52812 96.04 6.90884 94.9559 4.97763 93.0261C3.04642 91.0964 1.96148 88.4791 1.96148 85.75V12.25C1.96148 9.52092 3.04642 6.90362 4.97763 4.97387C6.90884 3.04412 9.52812 1.96 12.2593 1.96H318.741ZM318.741 0H12.2593C9.0079 0 5.88971 1.29062 3.59065 3.58794C1.2916 5.88526 0 9.0011 0 12.25V85.75C0 88.9989 1.2916 92.1147 3.59065 94.4121C5.88971 96.7094 9.0079 98 12.2593 98H318.741C321.992 98 325.11 96.7094 327.409 94.4121C329.708 92.1147 331 88.9989 331 85.75V12.25C331 9.0011 329.708 5.88526 327.409 3.58794C325.11 1.29062 321.992 0 318.741 0Z" fill="black"/>
                        <path d="M167.069 53.2874C165.01 53.2971 163 53.916 161.293 55.066C159.586 56.216 158.258 57.8456 157.477 59.7491C156.696 61.6526 156.496 63.7446 156.904 65.7612C157.312 67.7778 158.308 69.6285 159.767 71.0798C161.226 72.5312 163.083 73.518 165.103 73.9158C167.123 74.3136 169.216 74.1046 171.117 73.3151C173.018 72.5255 174.643 71.1909 175.786 69.4797C176.929 67.7684 177.539 65.7573 177.539 63.6999C177.559 62.3229 177.301 60.9559 176.781 59.6803C176.262 58.4048 175.49 57.2468 174.514 56.2752C173.537 55.3037 172.374 54.5385 171.095 54.0252C169.816 53.5119 168.447 53.261 167.069 53.2874ZM167.069 70.021C165.803 70.1094 164.539 69.8152 163.443 69.1766C162.346 68.538 161.467 67.5846 160.92 66.4401C160.373 65.2957 160.183 64.0133 160.375 62.7595C160.567 61.5058 161.132 60.3387 161.996 59.4101C162.861 58.4814 163.985 57.8342 165.222 57.5523C166.46 57.2705 167.754 57.3673 168.935 57.83C170.117 58.2926 171.132 59.0999 171.849 60.1467C172.566 61.1936 172.95 62.4316 172.954 63.6999C172.993 64.5036 172.871 65.307 172.595 66.0628C172.319 66.8186 171.894 67.5115 171.346 68.1006C170.797 68.6897 170.136 69.1631 169.402 69.493C168.667 69.8228 167.874 70.0023 167.069 70.021ZM144.242 53.2874C142.182 53.2923 140.17 53.9071 138.46 55.0542C136.749 56.2013 135.418 57.8291 134.633 59.7322C133.848 61.6353 133.645 63.7281 134.05 65.7463C134.455 67.7645 135.449 69.6175 136.907 71.0713C138.366 72.5251 140.222 73.5143 142.243 73.9141C144.264 74.3139 146.358 74.1063 148.26 73.3175C150.163 72.5287 151.789 71.1941 152.933 69.4823C154.077 67.7705 154.687 65.7583 154.687 63.6999C154.707 62.3229 154.45 60.9559 153.93 59.6803C153.41 58.4048 152.639 57.2468 151.662 56.2752C150.685 55.3037 149.523 54.5385 148.244 54.0252C146.965 53.5119 145.596 53.261 144.218 53.2874H144.242ZM144.242 70.021C142.976 70.1144 141.71 69.8246 140.61 69.1893C139.511 68.554 138.628 67.6026 138.077 66.4589C137.526 65.3152 137.332 64.0323 137.521 62.7771C137.71 61.5219 138.273 60.3526 139.136 59.4215C139.999 58.4903 141.123 57.8404 142.361 57.5564C143.599 57.2724 144.894 57.3674 146.077 57.829C147.261 58.2906 148.277 59.0975 148.995 60.1447C149.713 61.1918 150.099 62.4307 150.102 63.6999C150.142 64.5036 150.02 65.307 149.744 66.0628C149.468 66.8186 149.043 67.5115 148.494 68.1006C147.946 68.6897 147.285 69.1631 146.55 69.493C145.816 69.8228 145.023 70.0023 144.218 70.021H144.242ZM117.051 56.497V60.9069H127.643C127.477 62.9841 126.613 64.944 125.192 66.4685C124.132 67.547 122.858 68.392 121.452 68.949C120.046 69.5059 118.538 69.7626 117.027 69.7024C113.906 69.7024 110.912 68.4635 108.705 66.258C106.498 64.0526 105.258 61.0614 105.258 57.9425C105.258 54.8235 106.498 51.8323 108.705 49.6269C110.912 47.4214 113.906 46.1824 117.027 46.1824C120.013 46.1338 122.896 47.2704 125.044 49.3429L128.158 46.2314C126.708 44.764 124.978 43.6023 123.07 42.8153C121.162 42.0284 119.115 41.6321 117.051 41.6499C114.872 41.5652 112.697 41.921 110.658 42.696C108.62 43.4711 106.758 44.6494 105.186 46.1604C103.614 47.6714 102.363 49.484 101.509 51.4896C100.655 53.4952 100.214 55.6525 100.214 57.8322C100.214 60.0119 100.655 62.1692 101.509 64.1748C102.363 66.1803 103.614 67.993 105.186 69.504C106.758 71.015 108.62 72.1933 110.658 72.9684C112.697 73.7434 114.872 74.0992 117.051 74.0144C119.15 74.1092 121.245 73.7537 123.194 72.9719C125.144 72.1901 126.903 71.0001 128.354 69.482C130.923 66.6618 132.295 62.9546 132.179 59.1429C132.187 58.2144 132.105 57.2872 131.934 56.3744L117.051 56.497ZM228.145 59.9269C227.505 58.0472 226.31 56.4058 224.716 55.2201C223.122 54.0345 221.206 53.3605 219.22 53.2874C217.879 53.2848 216.551 53.5571 215.32 54.0875C214.088 54.6178 212.978 55.3949 212.059 56.3709C211.14 57.3468 210.431 58.5007 209.976 59.7613C209.52 61.0219 209.329 62.3624 209.413 63.6999C209.383 65.0693 209.63 66.4306 210.138 67.7025C210.647 68.9744 211.406 70.1309 212.372 71.1028C213.338 72.0747 214.49 72.8422 215.759 73.3593C217.028 73.8764 218.389 74.1325 219.759 74.1124C221.475 74.1217 223.165 73.7058 224.68 72.9019C226.195 72.0981 227.486 70.9315 228.439 69.5064L224.884 67.0564C224.353 67.9404 223.602 68.6715 222.704 69.1783C221.805 69.685 220.791 69.9501 219.759 69.9474C218.697 69.9879 217.648 69.7081 216.747 69.1444C215.846 68.5808 215.136 67.7593 214.709 66.7869L228.66 61.0294L228.145 59.9269ZM213.924 63.406C213.874 62.6481 213.976 61.8881 214.224 61.1702C214.472 60.4523 214.861 59.7911 215.368 59.2252C215.875 58.6594 216.49 58.2003 217.176 57.8749C217.863 57.5494 218.608 57.3642 219.367 57.33C220.158 57.2779 220.947 57.4591 221.636 57.8511C222.324 58.2431 222.883 58.8286 223.241 59.5349L213.924 63.406ZM202.596 73.4999H207.181V42.8749H202.596V73.4999ZM195.094 55.6149H194.922C194.231 54.8429 193.385 54.2256 192.438 53.8034C191.492 53.3812 190.467 53.1636 189.43 53.1649C186.751 53.2948 184.224 54.4498 182.374 56.3906C180.523 58.3314 179.491 60.9092 179.491 63.5897C179.491 66.2703 180.523 68.848 182.374 70.7888C184.224 72.7296 186.751 73.8846 189.43 74.0144C190.469 74.0319 191.499 73.8216 192.448 73.3983C193.397 72.975 194.242 72.349 194.922 71.5644H195.069V73.0589C195.069 77.0524 192.936 79.1839 189.504 79.1839C188.36 79.1572 187.251 78.7911 186.317 78.1323C185.382 77.4735 184.665 76.5518 184.257 75.4845L180.26 77.1505C181.012 78.979 182.294 80.5413 183.941 81.637C185.588 82.7327 187.525 83.3118 189.504 83.3C194.873 83.3 199.311 80.1395 199.311 72.4464V53.8999H195.094V55.6149ZM189.847 70.021C188.265 69.8817 186.793 69.1554 185.721 67.9854C184.649 66.8154 184.054 65.2864 184.054 63.6999C184.054 62.1135 184.649 60.5845 185.721 59.4145C186.793 58.2444 188.265 57.5182 189.847 57.3789C190.631 57.4192 191.399 57.6158 192.106 57.9572C192.813 58.2987 193.444 58.7781 193.963 59.3671C194.482 59.9562 194.877 60.643 195.126 61.3871C195.375 62.1312 195.472 62.9176 195.413 63.6999C195.479 64.4856 195.386 65.2767 195.138 66.0254C194.891 66.774 194.493 67.4647 193.971 68.0555C193.448 68.6464 192.811 69.1252 192.098 69.463C191.385 69.8009 190.611 69.9907 189.822 70.021H189.847ZM249.623 42.8749H238.663V73.4999H243.248V61.8869H249.648C250.954 61.9808 252.266 61.8046 253.502 61.3693C254.737 60.9341 255.87 60.2492 256.829 59.3573C257.788 58.4654 258.553 57.3857 259.076 56.1854C259.599 54.9851 259.869 53.69 259.869 52.3809C259.869 51.0718 259.599 49.7768 259.076 48.5765C258.553 47.3762 257.788 46.2965 256.829 45.4046C255.87 44.5127 254.737 43.8278 253.502 43.3926C252.266 42.9573 250.954 42.7811 249.648 42.8749H249.623ZM249.623 57.5749H243.224V47.1379H249.721C251.116 47.1379 252.454 47.6916 253.44 48.6772C254.426 49.6627 254.98 50.9994 254.98 52.3932C254.98 53.787 254.426 55.1237 253.44 56.1092C252.454 57.0948 251.116 57.6484 249.721 57.6484L249.623 57.5749ZM277.893 53.1649C276.224 53.0653 274.562 53.455 273.111 54.2864C271.661 55.1177 270.485 56.3544 269.728 57.8444L273.798 59.5349C274.2 58.7959 274.807 58.1894 275.547 57.7892C276.287 57.389 277.128 57.2124 277.966 57.2809C278.548 57.213 279.138 57.2616 279.701 57.4238C280.264 57.5861 280.789 57.8588 281.246 58.2259C281.702 58.5931 282.081 59.0475 282.36 59.5624C282.639 60.0774 282.812 60.6428 282.87 61.2255V61.5439C281.398 60.7648 279.755 60.3609 278.089 60.3679C273.7 60.3679 269.262 62.8179 269.262 67.2525C269.306 68.198 269.538 69.1253 269.946 69.9794C270.355 70.8336 270.93 71.5973 271.638 72.2255C272.347 72.8536 273.175 73.3334 274.072 73.6364C274.969 73.9395 275.918 74.0597 276.863 73.99C278.018 74.0728 279.173 73.8435 280.209 73.3262C281.244 72.8089 282.121 72.0227 282.748 71.0499H282.895V73.4999H287.308V61.7154C287.308 56.3499 283.238 53.2384 278.015 53.2384L277.893 53.1649ZM277.329 69.9474C275.833 69.9474 273.749 69.188 273.749 67.3505C273.749 64.9005 276.348 64.0919 278.653 64.0919C280.109 64.056 281.549 64.4114 282.821 65.121C282.668 66.4474 282.04 67.6738 281.053 68.5742C280.066 69.4746 278.787 69.9884 277.452 70.021L277.329 69.9474ZM303.392 53.8999L298.145 67.1789H297.998L292.555 53.8999H287.651L295.816 72.471L291.157 82.7855H295.938L308.492 53.8999H303.392ZM262.176 73.4999H266.761V42.8749H262.176V73.4999Z" fill="black"/>
                        <path d="M103.248 34.9615H101.434V30.0615H102.978C103.683 29.3157 104.215 28.4245 104.537 27.4508C104.859 26.4772 104.963 25.4448 104.842 24.4265V17.15H114.649V30.037H116.292V34.937H114.478V31.85H103.248V34.9615ZM106.656 24.5C106.771 26.4763 106.283 28.4408 105.259 30.135H112.614V18.963H106.656V24.5ZM130.954 29.939C129.521 31.3633 127.581 32.1628 125.56 32.1628C123.538 32.1628 121.599 31.3633 120.166 29.939C118.773 28.4654 117.996 26.515 117.996 24.4877C117.996 22.4605 118.773 20.5101 120.166 19.0365C120.872 18.3254 121.713 17.761 122.638 17.3758C123.564 16.9907 124.557 16.7924 125.56 16.7924C126.563 16.7924 127.556 16.9907 128.481 17.3758C129.407 17.761 130.247 18.3254 130.954 19.0365C132.353 20.5073 133.133 22.4588 133.133 24.4877C133.133 26.5167 132.353 28.4682 130.954 29.939ZM121.563 28.714C122.625 29.7702 124.062 30.3633 125.56 30.3633C127.058 30.3633 128.495 29.7702 129.556 28.714C130.604 27.5601 131.184 26.0579 131.184 24.5C131.184 22.9421 130.604 21.4399 129.556 20.286C128.495 19.2297 127.058 18.6367 125.56 18.6367C124.062 18.6367 122.625 19.2297 121.563 20.286C120.516 21.4399 119.936 22.9421 119.936 24.5C119.936 26.0579 120.516 27.5601 121.563 28.714ZM142.649 32.1685C141.637 32.1886 140.631 32.0038 139.692 31.6252C138.754 31.2466 137.901 30.6821 137.187 29.9657C136.472 29.2492 135.91 28.3956 135.534 27.4563C135.158 26.517 134.976 25.5113 135 24.5C134.976 23.4886 135.158 22.483 135.534 21.5437C135.91 20.6044 136.472 19.7508 137.187 19.0343C137.901 18.3178 138.754 17.7533 139.692 17.3748C140.631 16.9962 141.637 16.8114 142.649 16.8315C143.675 16.8061 144.694 17.0134 145.628 17.4377C146.562 17.862 147.388 18.4924 148.043 19.2815L146.719 20.5555C146.235 19.9411 145.611 19.4515 144.898 19.1276C144.186 18.8037 143.406 18.6548 142.625 18.6935C141.872 18.6739 141.123 18.8072 140.424 19.0851C139.724 19.363 139.088 19.7799 138.555 20.3105C137.492 21.4713 136.902 22.9877 136.902 24.5612C136.902 26.1347 137.492 27.6512 138.555 28.812C139.088 29.3426 139.724 29.7594 140.424 30.0374C141.123 30.3153 141.872 30.4485 142.625 30.429C143.488 30.4213 144.338 30.2216 145.114 29.8444C145.89 29.4673 146.573 28.9221 147.112 28.2485L148.436 29.5715C147.768 30.3803 146.931 31.0327 145.984 31.4825C144.937 31.9561 143.798 32.1905 142.649 32.1685ZM156.134 31.85H154.247V18.963H150.127V17.15H160.229V18.963H156.134V31.85ZM173.224 17.15L167.658 29.547C167.435 30.2803 166.99 30.9264 166.384 31.396C165.778 31.8656 165.041 32.1355 164.275 32.1685C163.768 32.1621 163.268 32.0537 162.804 31.85L163.294 30.1105C163.592 30.2839 163.93 30.3767 164.275 30.38C164.635 30.4071 164.995 30.3215 165.304 30.135C165.6 29.8851 165.827 29.5649 165.966 29.204L166.506 28.028L161.602 17.1745H163.833L167.462 25.6025L170.993 17.15H173.224ZM175.357 31.85V17.15H185.998V31.85H184.11V18.963H177.245V31.85H175.357ZM189.357 31.85V17.15H191.245V23.4465H198.601V17.15H200.488V31.85H198.601V25.2105H191.245V31.85H189.357ZM215.911 29.939C214.477 31.3633 212.538 32.1628 210.517 32.1628C208.495 32.1628 206.556 31.3633 205.122 29.939C203.729 28.4654 202.953 26.515 202.953 24.4877C202.953 22.4605 203.729 20.5101 205.122 19.0365C205.829 18.3254 206.669 17.761 207.595 17.3758C208.521 16.9907 209.514 16.7924 210.517 16.7924C211.519 16.7924 212.512 16.9907 213.438 17.3758C214.364 17.761 215.204 18.3254 215.911 19.0365C217.309 20.5073 218.089 22.4588 218.089 24.4877C218.089 26.5167 217.309 28.4682 215.911 29.939ZM206.52 28.714C207.582 29.7702 209.019 30.3633 210.517 30.3633C212.015 30.3633 213.452 29.7702 214.513 28.714C215.561 27.5601 216.141 26.0579 216.141 24.5C216.141 22.9421 215.561 21.4399 214.513 20.286C213.452 19.2297 212.015 18.6367 210.517 18.6367C209.019 18.6367 207.582 19.2297 206.52 20.286C205.473 21.4399 204.892 22.9421 204.892 24.5C204.892 26.0579 205.473 27.5601 206.52 28.714ZM225.792 31.85V17.15H231.112C232.217 17.1291 233.287 17.5325 234.103 18.277C234.513 18.6323 234.84 19.0732 235.06 19.5685C235.28 20.0639 235.389 20.6015 235.378 21.1435C235.39 21.7966 235.202 22.4376 234.839 22.981C234.479 23.5088 233.978 23.9248 233.392 24.1815C234.104 24.4167 234.727 24.8607 235.182 25.4555C235.654 26.0557 235.905 26.7995 235.893 27.5625C235.906 28.1273 235.794 28.6879 235.565 29.2045C235.336 29.7211 234.996 30.181 234.569 30.5515C233.715 31.3384 232.592 31.7681 231.431 31.752L225.792 31.85ZM227.679 23.4465H231.112C231.433 23.4599 231.752 23.4032 232.049 23.2805C232.345 23.1578 232.611 22.972 232.828 22.736C233.045 22.5393 233.221 22.3009 233.344 22.0351C233.466 21.7693 233.535 21.4815 233.544 21.1888C233.553 20.8961 233.503 20.6046 233.397 20.3316C233.291 20.0587 233.131 19.8098 232.926 19.6C232.722 19.3684 232.468 19.1847 232.184 19.0619C231.9 18.9391 231.593 18.8802 231.284 18.8895H227.778L227.679 23.4465ZM227.679 30.037H231.48C231.812 30.0481 232.142 29.9858 232.448 29.8545C232.753 29.7232 233.025 29.5262 233.245 29.2775C233.678 28.8294 233.923 28.2338 233.932 27.6115C233.932 26.9617 233.673 26.3385 233.214 25.8791C232.754 25.4196 232.13 25.1615 231.48 25.1615H227.753L227.679 30.037Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M125.56 17.0374C124.589 17.0374 123.629 17.2293 122.733 17.602C121.838 17.9743 121.025 18.5198 120.342 19.2069C118.993 20.6348 118.242 22.5241 118.242 24.4877C118.242 26.4511 118.993 28.3401 120.341 29.768C121.729 31.1449 123.605 31.9178 125.56 31.9178C127.515 31.9178 129.391 31.1448 130.779 29.7677C132.133 28.3427 132.887 26.4528 132.887 24.4877C132.887 22.5225 132.132 20.6322 130.778 19.2072C130.095 18.5199 129.282 17.9744 128.387 17.602C127.491 17.2293 126.53 17.0374 125.56 17.0374ZM122.544 17.1496C123.5 16.752 124.525 16.5474 125.56 16.5474C126.595 16.5474 127.62 16.752 128.576 17.1496C129.531 17.5472 130.399 18.1298 131.128 18.8639L131.132 18.8677C132.574 20.384 133.378 22.3959 133.378 24.4877C133.378 26.5795 132.574 28.5914 131.132 30.1078L131.127 30.1128C129.648 31.5827 127.646 32.4078 125.56 32.4078C123.474 32.4078 121.472 31.5827 119.993 30.1127L119.987 30.1073C118.551 28.5882 117.751 26.5775 117.751 24.4877C117.751 22.3979 118.551 20.3873 119.988 18.8682L119.992 18.8638C120.721 18.1298 121.589 17.5472 122.544 17.1496ZM210.517 17.0374C209.546 17.0374 208.585 17.2293 207.689 17.602C206.794 17.9743 205.982 18.5197 205.299 19.2068C203.95 20.6347 203.198 22.524 203.198 24.4877C203.198 26.4511 203.95 28.3402 205.298 29.768C206.685 31.1449 208.561 31.9178 210.517 31.9178C212.472 31.9178 214.348 31.1448 215.735 29.7676C217.089 28.3426 217.844 26.4527 217.844 24.4877C217.844 22.5225 217.089 20.6323 215.735 19.2073C215.051 18.5199 214.239 17.9744 213.344 17.602C212.448 17.2293 211.487 17.0374 210.517 17.0374ZM207.501 17.1496C208.456 16.752 209.481 16.5474 210.517 16.5474C211.552 16.5474 212.577 16.752 213.532 17.1496C214.488 17.5472 215.355 18.1298 216.085 18.8639L216.088 18.8677C217.53 20.3841 218.334 22.3959 218.334 24.4877C218.334 26.5795 217.53 28.5914 216.088 30.1078L216.084 30.1128C214.604 31.5827 212.603 32.4078 210.517 32.4078C208.43 32.4078 206.429 31.5827 204.95 30.1127L204.944 30.1073C203.508 28.5882 202.708 26.5775 202.708 24.4877C202.708 22.3979 203.508 20.3873 204.944 18.8682L204.948 18.8638C205.678 18.1298 206.545 17.5472 207.501 17.1496ZM145.526 17.6607C144.626 17.2517 143.644 17.0519 142.655 17.0764L142.644 17.0767C141.665 17.0572 140.692 17.2357 139.784 17.6019C138.876 17.9682 138.052 18.5142 137.36 19.2073C136.669 19.9003 136.125 20.726 135.761 21.6347C135.398 22.5433 135.222 23.516 135.245 24.4943L135.245 24.5056C135.222 25.4839 135.398 26.4567 135.761 27.3653C136.125 28.2739 136.669 29.0996 137.36 29.7927C138.052 30.4857 138.876 31.0318 139.784 31.398C140.692 31.7642 141.665 31.943 142.644 31.9235L142.649 32.1685L142.654 31.9235C143.765 31.9448 144.868 31.7182 145.881 31.2603C146.728 30.8577 147.484 30.2874 148.102 29.5848L147.128 28.611C146.596 29.217 145.948 29.7115 145.222 30.0648C144.413 30.4575 143.528 30.6656 142.629 30.674C141.844 30.6941 141.063 30.555 140.333 30.265C139.603 29.9749 138.939 29.5396 138.382 28.9857L138.374 28.9776C137.269 27.7716 136.657 26.1959 136.657 24.5612C136.657 22.9265 137.269 21.3511 138.374 20.1451L138.382 20.1366C138.939 19.5827 139.603 19.1476 140.333 18.8574C141.061 18.5684 141.839 18.4292 142.622 18.4483C143.44 18.4094 144.255 18.5658 145 18.9046C145.666 19.2074 146.258 19.648 146.739 20.1962L147.706 19.2656C147.1 18.5853 146.358 18.0384 145.526 17.6607ZM142.649 32.4135C141.606 32.4336 140.569 32.2428 139.601 31.8524C138.631 31.4615 137.751 30.8785 137.013 30.1386C136.275 29.3987 135.694 28.5172 135.306 27.5472C134.919 26.579 134.731 25.5425 134.754 24.5C134.731 23.4575 134.919 22.421 135.306 21.4527C135.694 20.4827 136.275 19.6012 137.013 18.8613C137.751 18.1215 138.631 17.5385 139.601 17.1476C140.569 16.7573 141.605 16.5664 142.649 16.5864C143.71 16.561 144.763 16.7758 145.729 17.2147C146.697 17.6543 147.553 18.3075 148.232 19.125L148.377 19.3001L146.694 20.9197L146.527 20.7071C146.067 20.1235 145.474 19.6583 144.797 19.3506C144.12 19.0429 143.379 18.9015 142.637 18.9382L142.618 18.9391C141.899 18.9204 141.183 19.0471 140.514 19.3128C139.847 19.5777 139.241 19.9748 138.732 20.4801C137.712 21.5952 137.147 23.0509 137.147 24.5612C137.147 26.0716 137.712 27.5273 138.732 28.6424C139.241 29.1476 139.847 29.5447 140.514 29.8097C141.183 30.0754 141.899 30.2028 142.618 30.1841L142.623 30.184C143.449 30.1766 144.264 29.9854 145.007 29.6241C145.75 29.2628 146.404 28.7407 146.92 28.0955L147.091 27.8816L148.767 29.5556L148.625 29.7273C147.935 30.5638 147.069 31.2386 146.089 31.7038L146.085 31.7057C145.007 32.1937 143.833 32.4355 142.649 32.4135ZM233.938 18.4579C233.168 17.7557 232.159 17.3753 231.117 17.3949L231.112 17.395H226.037V31.6007L231.427 31.507L231.434 31.507C232.533 31.5222 233.595 31.1158 234.403 30.3714L234.408 30.3664C234.808 30.0195 235.126 29.589 235.341 29.1053C235.555 28.6217 235.66 28.0967 235.648 27.5679L235.648 27.5588C235.659 26.852 235.426 26.1629 234.989 25.6067L234.987 25.6043C234.562 25.0486 233.98 24.6339 233.315 24.4141L232.709 24.2136L233.294 23.9571C233.837 23.7191 234.301 23.3335 234.636 22.8442C234.97 22.3425 235.144 21.7507 235.133 21.1478V21.1387C235.143 20.6326 235.042 20.1306 234.836 19.668C234.63 19.2055 234.325 18.7938 233.943 18.462L233.938 18.4579ZM234.267 18.0941C233.405 17.3091 232.275 16.8836 231.11 16.905H225.546V32.0993L231.427 31.997L231.431 31.997C232.653 32.0129 233.834 31.561 234.733 30.734C235.185 30.3404 235.546 29.8521 235.789 29.3037C236.032 28.7556 236.151 28.1609 236.138 27.5617L236.138 27.5661L235.893 27.5625L236.138 27.5571L236.138 27.5617C236.15 26.7447 235.881 25.9484 235.376 25.3054C235.001 24.8156 234.519 24.4218 233.969 24.1526C234.392 23.8864 234.758 23.5351 235.042 23.119L235.043 23.1169C235.432 22.5333 235.635 21.845 235.624 21.1437L235.623 21.1483L235.378 21.1435L235.623 21.1392L235.624 21.1437C235.634 20.5674 235.518 19.9958 235.284 19.469C235.05 18.9419 234.702 18.4725 234.267 18.0941ZM104.597 16.905H114.894V29.792H116.537V35.182H114.232V32.095H103.493V35.2065H101.188V29.8165H102.871C103.516 29.1127 104.004 28.2804 104.304 27.374C104.614 26.4344 104.715 25.438 104.598 24.4554L104.597 24.441V16.905ZM105.087 17.395V24.4121C105.209 25.4613 105.101 26.5246 104.769 27.5277C104.436 28.5354 103.886 29.4578 103.157 30.2296L103.084 30.3065H101.679V34.7165H103.003V31.605H114.723V34.692H116.047V30.282H114.404V17.395H105.087ZM149.882 16.905H160.474V19.208H156.38V32.095H154.001V19.208H149.882V16.905ZM150.373 17.395V18.718H154.492V31.605H155.889V18.718H159.984V17.395H150.373ZM170.829 16.905H173.603L167.888 29.6333C167.649 30.4089 167.176 31.0922 166.534 31.5896C165.888 32.0903 165.102 32.3781 164.285 32.4133L164.272 32.4138C163.732 32.407 163.199 32.2913 162.705 32.0743L162.51 31.9886L163.144 29.7396L163.417 29.8988C163.678 30.0507 163.975 30.1322 164.277 30.135L164.293 30.1351C164.596 30.158 164.899 30.0884 165.161 29.9351C165.418 29.7137 165.616 29.4324 165.738 29.116L165.743 29.1017L166.236 28.0272L161.222 16.9295H163.995L167.459 24.9746L170.829 16.905ZM171.156 17.395L167.465 26.2304L163.672 17.4195H161.982L166.775 28.0288L166.192 29.2993C166.038 29.6956 165.788 30.0472 165.463 30.322L165.448 30.3347L165.431 30.3448C165.08 30.5562 164.673 30.654 164.264 30.6249C163.984 30.6212 163.708 30.5649 163.45 30.4598L163.099 31.7052C163.474 31.8436 163.87 31.9176 164.271 31.9234C164.984 31.8913 165.67 31.6395 166.234 31.2024C166.8 30.7639 167.216 30.1606 167.424 29.4758L167.428 29.4609L172.845 17.395H171.156ZM175.112 16.905H186.243V32.095H183.865V19.208H177.49V32.095H175.112V16.905ZM175.602 17.395V31.605H177V18.718H184.355V31.605H185.753V17.395H175.602ZM189.112 16.905H191.49V23.2015H198.355V16.905H200.734V32.095H198.355V25.4555H191.49V32.095H189.112V16.905ZM189.602 17.395V31.605H191V24.9655H198.846V31.605H200.243V17.395H198.846V23.6915H191V17.395H189.602ZM121.39 20.1124C122.498 19.0104 123.997 18.3917 125.56 18.3917C127.123 18.3917 128.622 19.0104 129.729 20.1124L129.738 20.1212C130.827 21.3201 131.429 22.8812 131.429 24.5C131.429 26.1188 130.826 27.6796 129.738 28.8786L129.73 28.8878C128.622 29.9898 127.123 30.6083 125.56 30.6083C123.997 30.6083 122.498 29.9896 121.39 28.8876L121.563 28.714L121.382 28.8786C120.293 27.6796 119.69 26.1188 119.69 24.5C119.69 22.8812 120.293 21.3204 121.382 20.1214L121.39 20.1124ZM121.741 28.5448C122.756 29.5525 124.129 30.1183 125.56 30.1183C126.991 30.1183 128.364 29.5525 129.379 28.5448C130.383 27.4365 130.939 25.995 130.939 24.5C130.939 23.005 130.383 21.5634 129.379 20.4552C128.364 19.4474 126.991 18.8817 125.56 18.8817C124.129 18.8817 122.756 19.4474 121.741 20.4552C120.737 21.5634 120.181 23.005 120.181 24.5C120.181 25.995 120.737 27.4365 121.741 28.5448ZM206.347 20.1124C207.454 19.0104 208.954 18.3917 210.517 18.3917C212.079 18.3917 213.579 19.0104 214.686 20.1124L214.695 20.1212C215.783 21.3201 216.386 22.8812 216.386 24.5C216.386 26.1188 215.783 27.6796 214.695 28.8786L214.686 28.8878C213.579 29.9898 212.079 30.6083 210.517 30.6083C208.954 30.6083 207.454 29.9896 206.347 28.8876L206.52 28.714L206.338 28.8786C205.25 27.6796 204.647 26.1188 204.647 24.5C204.647 22.8812 205.25 21.3204 206.338 20.1214L206.347 20.1124ZM206.697 28.5448C207.713 29.5526 209.085 30.1183 210.517 30.1183C211.948 30.1183 213.321 29.5526 214.336 28.5448C215.34 27.4366 215.896 25.995 215.896 24.5C215.896 23.005 215.34 21.5634 214.336 20.4552C213.321 19.4474 211.948 18.8817 210.517 18.8817C209.085 18.8817 207.713 19.4474 206.697 20.4552C205.693 21.5634 205.137 23.005 205.137 24.5C205.137 25.995 205.693 27.4366 206.697 28.5448ZM231.28 18.6445C231.624 18.6348 231.966 18.7005 232.282 18.8371C232.597 18.9734 232.878 19.1769 233.106 19.4334C233.332 19.666 233.508 19.9412 233.625 20.243C233.743 20.5466 233.799 20.8709 233.789 21.1964C233.779 21.522 233.703 21.8422 233.566 22.1379C233.431 22.4302 233.239 22.6927 233.001 22.91C232.761 23.1683 232.468 23.3719 232.143 23.5069C231.815 23.6425 231.462 23.7055 231.107 23.6915H227.429L227.538 18.6445H231.28ZM232.087 19.2867C231.836 19.1782 231.564 19.1262 231.291 19.1344L231.284 19.1345H228.018L227.93 23.2015H231.122C231.407 23.2134 231.691 23.1632 231.955 23.0542C232.218 22.9451 232.455 22.7799 232.648 22.5701L232.655 22.562L232.664 22.5545C232.856 22.3799 233.012 22.1683 233.121 21.9324C233.23 21.6964 233.29 21.4409 233.299 21.1811C233.307 20.9214 233.262 20.6626 233.168 20.4203C233.074 20.178 232.932 19.9571 232.751 19.7708L232.743 19.7624C232.561 19.5578 232.338 19.3953 232.087 19.2867ZM106.411 18.718H112.859V30.38H104.824L105.049 30.0083C106.048 28.3564 106.523 26.441 106.411 24.5141L106.411 24.5L106.411 18.718ZM106.901 19.208V24.4929C107.009 26.3733 106.585 28.243 105.683 29.89H112.369V19.208H106.901ZM227.512 24.9165H231.48C232.195 24.9165 232.881 25.2004 233.387 25.7058C233.893 26.2112 234.177 26.8967 234.177 27.6115L234.177 27.6149C234.167 28.2978 233.899 28.9515 233.425 29.4439C233.182 29.7177 232.881 29.9347 232.545 30.0795C232.207 30.2246 231.843 30.2937 231.476 30.282H227.431L227.512 24.9165ZM227.995 25.4065L227.928 29.792H231.488C231.784 29.8019 232.079 29.7465 232.351 29.6295C232.623 29.5125 232.865 29.3368 233.062 29.1152L233.069 29.1073C233.457 28.7044 233.678 28.1692 233.687 27.6097C233.686 27.0255 233.454 26.4654 233.04 26.0523C232.626 25.6388 232.065 25.4065 231.48 25.4065H227.995Z" fill="black"/>
                        <path d="M25.8555 80.1111L55.8921 48.9808L25.8807 17.9062C25.0791 18.39 24.583 19.5102 24.583 20.9765V77.0706C24.5938 78.5369 25.0719 79.5752 25.8555 80.1111Z" fill="black"/>
                        <path d="M56.9682 48.1213L65.9152 38.8473L29.4801 18.1409C28.8666 17.7714 28.1697 17.5763 27.46 17.5752L56.9646 48.1175L56.9682 48.1213Z" fill="black"/>
                        <path d="M56.9682 49.8442L27.3701 80.5206C28.113 80.5334 28.8447 80.3324 29.4838 79.94L65.9907 59.1778L56.9682 49.8442Z" fill="black"/>
                        <path d="M79.1144 46.3609L66.9898 39.4575L57.7983 48.9846L67.0581 58.5711L79.1108 51.6864C81.6737 50.2238 81.6737 47.816 79.1144 46.3609Z" fill="black"/>
                    </svg>
                </div>
                <div className="download-rights">
                    Все права защищены, с полным перечнем правил и особенностей  вы не можете ознакомиться. Для дальнейшего написания текста делегируйте   
                </div>
            </div>
        </div>
    )
}

export default DownloadApp;