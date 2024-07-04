import styled from '@emotion/styled';

import type { TargetType } from '../FilterType';

interface Props {
    target: TargetType;
    selectedTarget: TargetType;
    setSelectedTarget: (target: TargetType) => void;
}

const TargetTypeFilter: React.FC<Props> = ({
    target,
    selectedTarget,
    setSelectedTarget,
}: Props) => {
    const contentByTarget = {
        ALL: {
            icon: 'ALL',
            text: '전체',
        },
        FEMALE: {
            icon: '👩🏻‍🦳',
            text: '여성이',
        },
        MALE: {
            icon: '👨🏻‍🦳',
            text: '남성이',
        },
        TEEN: {
            icon: '👦🏻',
            text: '청소년이',
        },
    };

    return (
        <FilterBtn
            target={target}
            selectedTarget={selectedTarget}
            onClick={() => {
                setSelectedTarget(target);
            }}
        >
            <div>{contentByTarget[target].icon}</div>
            <p>{contentByTarget[target].text}</p>
        </FilterBtn>
    );
};
export default TargetTypeFilter;

const FilterBtn = styled.button<Omit<Props, 'setSelectedTarget'>>`
    div {
        ${({ target, selectedTarget }) =>
            target === selectedTarget
                ? `background-color: rgb(70, 132, 233);`
                : `background-color: rgb(230, 241, 255);`}

        border-radius: 20px;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p {
        margin-top: 5px;
        transition:
            color 200ms ease 0s,
            font-weight 200ms ease 0s;
        ${({ target, selectedTarget }) =>
            target === selectedTarget
                ? `color: rgb(70, 132, 233); font-weight: bold;`
                : `color: rgb(102, 102, 102);`}
    }
`;
