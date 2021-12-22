export function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    return color;
}

export default function stringAvatar(name: string) {

    const lettersArr = name.split(' ');

    let firstLetter = lettersArr[0][0];
    let secondLetter = '';

    if (lettersArr.length > 1) {
        secondLetter = lettersArr[1][0];
    }





    if (name === '') {
        return {
            sx: {
                bgcolor: "lightgray",
            },
        }
    }



    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${firstLetter}${secondLetter}`,
    };
}