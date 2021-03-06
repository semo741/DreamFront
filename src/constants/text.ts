// 개인정보 이용 안내
export const terms = {
    title: '<개인정보 수집 및 이용에 대한 동의>',
    content: [
        '드림은 신고 진행에 필요한 최소한의 개인정보만을 취득하며, 수집된 개인정보는 신고자 확인, 신고 진행 시 제반 사항 안내 등 신고를 위한 용도로만 사용 됩니다. 수집되는 개인 정보는 보유 및 이용기간 동안 안전하게 보호되고, 당사를 통해 열람, 처리 정지를 요구 할 수 있습니다. 다만, 삭제 및 정정은 불가능합니다.',
        '개인정보 수집 및 이용목적 : 신고자 확인 및 신고 진행 제반 사항 안내',
        '개인정보 수집 항목(필수) : 이름, 휴대전화번호, 학교',
        '개인정보 보유 및 이용 기간 : 수집된 개인정보는 신고 진행 후 3년 이내 데이터 삭제하며 모든 정보를 폐기 합니다.',
        '개인정보 수집 동의 거부의 권리 : 해당 정보 제공에 동의 하지 않으실 경우 신고가 불가능 합니다.',
    ],
};

export const exp = {
    name: /^[가-힣]+$/,
    email: /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
    phone: /^01[016789]-\d{3,4}-\d{4}$/g,
    password: /^[a-zA-Z0-9]+$/,
};
