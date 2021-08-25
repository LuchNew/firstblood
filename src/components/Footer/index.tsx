import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  return (
    <DefaultFooter
      copyright={`2021 LuchNew`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/LuchNew/firstblood',
          blankTarget: true,
        },
      ]}
    />
  );
};
