let RESIZE_LIST = [
    [600, 600],
    [600, 500],
    [600, 1000],
    [600, 1200],
    [672, 560],
    [640, 960],
    [480, 800],
    [480, 1200],
    [320, 1200],
    [960, 640],
    [640, 200],
    [640, 100],
    [2000, 240],
    [1458, 180],
    [1940, 500],
];
let GUIDES_FACTOR = 0.0667;

let initialFrame = figma.currentPage.selection[0];
let lastFrame = initialFrame;

RESIZE_LIST.forEach((size) => {
    const newFrame = initialFrame.clone();

    newFrame.x = lastFrame.x + lastFrame.width + 150;
    newFrame.resize(size[0], size[1]);

    newFrame.name = size.join('x');

    const smallestSide = newFrame.width >= newFrame.height ? newFrame.height : newFrame.width;
    const guideOffsetNear = smallestSide * GUIDES_FACTOR;
    const guideOffsetFarX = newFrame.width - guideOffsetNear;
    const guideOffsetFarY = newFrame.height - guideOffsetNear;
    newFrame.guides = [
        { axis: 'X', offset: guideOffsetNear },
        { axis: 'Y', offset: guideOffsetNear },
        { axis: 'X', offset: guideOffsetFarX },
        { axis: 'Y', offset: guideOffsetFarY },
    ];

    lastFrame = newFrame;
});
