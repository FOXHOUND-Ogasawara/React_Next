# day3_解答サンプル

## 言語化の例

- 評価指標としては、フォーマットに準じた内容で記載できているか
- 自身が何をする必要があるか

これらを言語化できているかとなります。

また、day2までの内容とは異なり、資料のみでは言語化することが難しい内容となっています。
その分事前の確認を徹底させ、そのうえで言語化するように促していきましょう。

## ボタンコンポーネント

### タスク1-1：コンポーネントの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - カスタムボタンコンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - 資料内のTODOを把握しているか
        - 条件分岐を用いたcolor設定を把握しているか
        - レンダリング時に適切なPropsを設定できるか
    - 事前にわかる範囲で確認事項を記載しているか
        - `extends` や `...props` については初見となるため事前確認があるか
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components/parts
　　ファイル名：CustomButton.tsx
・資料のソースコードをコピペ
・TODO：variantTypeに応じてcolorを変化
	・if文を利用してvariantTyepに応じて変数colorを変化させる
	・設定する色については別途調査を行う
・TODO：<Button>の実装
　・MUIのButtonコンポーネントに対してPropsを渡しレンダリングする

【確認事項】
・extends、...propsとはなにかをご教示お願いしたいです
・作成したコンポーネントの動作確認方法について
　これまでのタスクと同様にストーリーブック作成後の動作確認で問題ないでしょうか？
```

### タスク1-2：ストーリーブックの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - カスタムボタンコンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - 資料内のTODOを把握しているか
        - 条件分岐を用いたcolor設定を把握しているか
        - レンダリング時に適切なPropsを設定できるか
    - 事前にわかる範囲で確認事項を記載しているか
        - `extends` や `...props` については初見となるため事前確認があるか
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components/parts
　　ファイル名：CustomButton.tsx
・資料のソースコードをコピペ
・TODO：メタデータのエクスポート
　　title: 'Components/Parts/CustomButton'
		component: CustomButton
・TODO：ストーリーの定義
		type Story = StoryObj<typeof CustomButton>
・TODO：サンプルを参考にストーリーを設定
		[Secondary] -> variantType: 'secondary'
		[Danger] -> variantType: 'danger'
・実行確認

【確認事項】
・ストーリーの作成方法について、上記のような認識で問題ないでしょうか
　別途口頭にて確認させていただければと存じます
```

## カードコンポーネント

### タスク2-1：コンポーネントの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - カスタムカードコンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - 資料内のTODOを把握しているか
        - Propsから受け取った値を利用する方法を把握しているか
    - 事前にわかる範囲で確認事項を記載しているか
        - 子要素に設定するコンポーネントを確認しているか
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components/parts
　　ファイル名：CustomCard.tsx
・資料のソースコードをコピペ
・TODO：[title]と[description]を表示
	・MUIコンポーネントを利用してそれぞれをレンダリングする
	・利用するコンポーネントは別途確認

【確認事項】
・[title]や[description]を表示するコンポーネントに指定はありますか？
```

### タスク2-2：ストーリーブックの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - カスタムボタンコンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - 資料内のTODOを把握しているか
    - 事前にわかる範囲で確認事項を記載しているか
        - 画像の挿入の仕方
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components/parts
　　ファイル名：CustomCard.stories.tsx
・資料のソースコードをコピペ
・TODO：メタデータのエクスポート
　　title: 'Components/Parts/CustomCard'
component: CustomCard
・TODO：ストーリーの定義
type Story = StoryObj
・TODO：サンプルを参考にストーリーを設定
画像アリのストーリーを作成
画像の追加はAddIconを使用する
・実行確認
```

## モーダルコンポーネント

### タスク3-1：コンポーネントの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - カスタムカードコンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - 資料内のTODOを把握しているか
        - インターフェースとPropsを把握しているか
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components/parts
　　ファイル名：CustomModal.tsx
・資料のソースコードをコピペ
・TODO：インターフェースの定義
	・資料のプロパティを参考にインターフェースを定義
	・インターフェース名は「CustomModalProps」
・TODO：propsの設定
　・CustomModalにpropを受け渡せるように追記
　・追記する内容はインターフェースのプロパティを参照する
```

### タスク3-2：ストーリーブックの作成

- 観点
    - フォーマットを利用しているか
    - タスクの見積もりができているか
    - カスタムモーダルコンポーネントに関する記載があるか
        - 何をすべきかイメージができているか
        - 資料内のTODOを把握しているか
        - 初期設定の記述方法を把握しているか
        - モーダルを展開する処理を把握しているか
        - Propsの設定がイメージできているか
    - 事前にわかる範囲で確認事項を記載しているか
- 言語化例

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・対象ファイルの作成
　　作成場所：components/parts
　　ファイル名：CustomModal.stories.tsx
・資料のソースコードをコピペ
・TODO：メタデータのエクスポート
　　title: 'Components/Parts/CustomModal'
		component: CustomModal
・TODO：ストーリーの定義
		type Story = StoryObj<typeof CustomModal>
・TODO：デフォルトストーリーの作成
		Propsとして以下を渡す
		　open={open}
			title={"テスト"}
			content={"デフォルトストーリー"}
			onClose={setOpen(false)}
			onConfirm={alert("クリックされました) setOpen(false)}
・実行確認

【確認事項】
・これまでと違い、argsが存在していないこと、代わりにrenderとなっていることについて
　公式ドキュメントを確認したのですが、認識に誤りがないかを確認させていただきたいです
・ストーリーのPropsについて、上記のような認識で問題ないでしょうか
　別途口頭にて確認させていただければと存じます
```

## ストーリーを追加して試してみよう

言語は不要です。

本タスクはストーリーブックに慣れてもらうために用意したものです。
主に、特定の選択（ボタンの `variantType` みたいな）を行うことでフォーマットが適応されたり、コンポーネントの使い方をドキュメント化を通して確認したりを体験してもらいます。

実装例としては…

- カスタムボタン
    - ボタンのカラーバリエーション追加
        - `variantType` で選択できる内容を増やし色選択できるように
    - 「新規」や「更新」などの専用ボタン追加
        - 新規propsを追加して特定のボタンテンプレートを作成する
    - サイズなどのレイアウト調整
        - propsを活用して大きさや形などを変化させる
- カスタムカード
    - `title` や `description` 以外の要素を表示できるように
    - 子要素の表示位置やサイズをカスタムできるように
    - `actions` の使い方がドキュメント化によってわかりやすいように
- カスタムモーダル
    - モーダルへのカラーバリエーション追加
        - カスタムボタンのように色選択できるように
    - 子要素のボタンカスタマイズ
        - 「確認」や「キャンセル」という文言を変化させる
    - `onConfirm` にバリエーション追加
        - `alert` 以外の処理を使った確認

## アプリケーションへの統合

### タスク5-1：コンポーネントの反映

改修の対象箇所は以下となります。

- `UserCard.tsx`
    - `<Card>` → `<CustomCard>` 差し替え
    - 元々の構成と異なるため `<CustomCard>` 自体を改修する
- `RegisterForm.tsx`
    - `<Button>` → `<CustomButton>` 差し替え
- `EditUserForm.tsx`
    - `<Button>` → `<CustomButton>` 差し替え
- `DeleteUserButton.tsx`
    - `<Button>` → `<CustomModal>` を利用した内容に差し替え

### タスク5-2：UI/UXを向上させる

本タスクについては細かい仕様を含めて考えてもらい実装させてください。
ユーザー一覧画面に対する改修となるため、対象箇所を把握しつつ、どのように実装する必要があるのか調査、質問し言語化→着手としてください。

実装方法としては、 `users/page.tsx` と `UserList.tsx` のどちらを軸にしても問題はありません。
ですが、フィルタリングした表示用のデータをstateで管理していることもあって `UserList.tsx` 側を改修したほうが作業はしやすいかと思います。

- ユーザー検索機能
    - ID検索と役職検索
    - プルダウンによる実装

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・UserListコンポーネント内に検索枠の追加
　・ID検索用にstate管理しプルダウンで選択できるように
　・役職検索用にstate管理しプルダウンで選択できるように
・検索内容に応じて表示するユーザーリストをフィルタリングする処理を追加
　・onChangeで変化したstateを利用してuseEffectで再レンダリングさせる
・動作確認

- - - - - - - - - - - - - - -
★質問や相談されるであろう内容★
・二つの条件を組み合わせての絞り込み方法
・プルダウンで利用するデータの取得方法
```

- ユーザー並び替え機能
    - IDの昇順と降順に対応
    - プルダウン or チェックボックス

```
【期限はいつまでか】
202x/xx/xx xx:xxまで

【タスクの作業時間】
作業時間：n分
xx月xx日 xx:xx完了予定

【タスクの詳細】
・UserListコンポーネント内に並び替え機能を追加
　・並び順を判定するためにstate変数を追加
　・ラジオボタンで「昇順」「降順」を選択できるように
　・onChangeを設定してstateを更新
　・変化したstateを利用してuseEffectで再レンダリングさせる
・検索機能と衝突していないかを考慮する

- - - - - - - - - - - - - - -
★質問や相談されるであろう内容★
・ユーザー一覧にIDを表示する必要があるか
・検索機能を有効にしている場合の並び替え方法
```

## プログラムサンプル

## components/parts

### CustomButton.tsx

```tsx
import React from 'react';
import { Button, ButtonProps, SxProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger' | 'gradation';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variantType = 'primary', ...props }) => {
  let color: ButtonProps['color'] = 'primary';
  let customSx: SxProps = {};

  switch (variantType) {
    case 'secondary':
      color = 'secondary';
      break;
    case 'danger':
      color = 'error';
      break;
    case 'gradation':
      color = 'primary';
      customSx = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
      };
    default:
      color = 'primary';
  }

  return (
    <Button
      color={color}
      variant="contained"
      sx={{ ...customSx }}
      {...props}>
      {props.children}
    </Button>
  );
}

export default CustomButton;
```

### CustomButton.stories.tsx

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';
import { Add as AddIcon } from '@mui/icons-material';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/Parts/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    variantType: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variantType: 'secondary',
    children: 'Secondary Button',
  }
};

export const Danger: Story = {
  args: {
    variantType: 'danger',
    children: 'Danger Button',
  }
};

export const Disabled: Story = {
  args: {
    variantType: 'primary',
    children: 'Disabled Button',
    disabled: true,
  }
};

export const WithIcon: Story = {
  args: {
    variantType: 'primary',
    children: (
      <>
        <AddIcon sx={{ mr: 1 }} />
        Add Item
      </>
    ),
  },
};

export const Gradation: Story = {
  args: {
    variantType: 'gradation',
    children: 'Gradation Button',
    onClick:() => {
      alert("clickされました");
    },
  },
};

export const Gradation2: Story = {
  args: {
    variantType: 'primary',
    children: 'Gradation Button2',
    sx: {
      
    },
    onClick:() => {
      alert("clickされました");
    },
  },
};
```

### CustomCard.tsx

```tsx
import React from 'react';
import { Card, CardContent, Typography, CardActions } from '@mui/material';

interface CustomCardProps {
  title: string,
  description: string,
  actions?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, actions }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      {actions && (
        <CardActions>
          {actions}
        </CardActions>
      )}
    </Card>
  );
}

export default CustomCard;
```

### CustomCard.stories.tsx

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import CustomCard from './CustomCard';
import CustomButton from './CustomButton';
import { Add as AddIcon } from '@mui/icons-material';

const meta: Meta<typeof CustomCard> = {
  title: 'Components/Parts/CustomCard',
  component: CustomCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: 'カードタイトル',
    description: 'これはカスタムカードの説明です。',
    actions: (
      <>
        <CustomButton variantType="secondary">アクション1</CustomButton>
        <CustomButton variantType="danger">アクション2</CustomButton>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: 'アクションなしのカード',
    description: 'アクションが含まれていないカードの説明。',
  },
};

export const WithImage: Story = {
  render: () => (
    <CustomCard
      title="画像付きカード"
      description="このカードには画像が含まれています。"
      actions={
        <CustomButton variantType="primary">
          <AddIcon sx={{ mr: 1 }} />
          アクション
        </CustomButton>
      }
    />
  ),
};
```

### CustomModal.tsx

```tsx
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface CustomModalProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onConfirm?: () => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const CustomModal: React.FC<CustomModalProps> = ({ open, title, content, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {content}
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ mr: 2 }}>キャンセル</Button>
          {onConfirm && <Button variant="contained" color="primary" onClick={onConfirm}>確認</Button>}
        </Box>
      </Box>
    </Modal>
  );
}

export default CustomModal;
```

### CustomModal.stories.tsx

```tsx
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CustomModal from './CustomModal';
import CustomButton from './CustomButton';
import { Box } from '@mui/material';

const meta: Meta<typeof CustomModal> = {
  title: 'Components/Parts/CustomModal',
  component: CustomModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomModal>;

// TODO: デフォルトストーリーの作成
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
          open={open}
          title="title1"
          content="content1"
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("clickが確認できました");
            setOpen(false);
          }}
        />
      </Box>
    );
  },
};
```

## components

### UserList.tsx

```tsx
import React, { useEffect, useState } from 'react';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowDownward } from '@mui/icons-material';
import UserCard from './UserCard';
import { User } from '../types/User';

interface UserListProps {
  initialUsers: User[];
}

const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
  // 表示用のユーザー管理
  const [users, setUsers] = useState<User[]>(initialUsers);

  // 検索情報の管理
  const [selectingId, setSelectingId] = useState<number | string>("all");
  const [selectingRole, setSelectingRole] = useState<string>("all");

  // 検索欄表示用のデータ管理
  const [searchableId, setSearchableId] = useState<number[]>([]);
  const [searchableRole, setSearchableRole] = useState<string[]>([]);

  // 並び替え用のデータ管理
  const [sortOrder, setSortOrder] = useState<string>("asc");

  // 削除処理実行後のフィルタリング関数
  const handleUserDeleted = (deletedUserId: number) => {
    setUsers((prev) => prev.filter((user: User) => user.id !== deletedUserId));
  };

  // 並び順のハンドリング関数
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  // レンダリング用のユーザーデータ
  const filteredUsers = users.filter((user) => {
    const filterId = selectingId === "all" || user.id === selectingId;
    const filterRole = selectingRole === "all" || user.role === selectingRole;
    return filterId && filterRole;
  });

  // ユーザーリストのソート
  const sortedUser = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  const sortIcon = sortOrder === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;

  useEffect(() => {
    // 検索欄の初期データを設定
    setSearchableId(users.filter(user => !user.deleted).map(user => user.id));
    setSearchableRole([...new Set(users.map(user => user.role))]);
  }, [users]);

  if (users.length === 0) {
    return <Typography>ユーザーが存在しません。</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        ユーザー検索
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <FormControl variant="standard" sx={{ minWidth: 100, mr: 2 }}>
          <InputLabel id="selecting-id">ID</InputLabel>
          <Select
            labelId="selecting-id"
            value={selectingId}
            onChange={(e) => setSelectingId(e.target.value)}
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            <MenuItem value="all">all</MenuItem>
            {searchableId.map((id, key) => (
              <MenuItem key={key} value={id}>{id}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 100, mr: 2 }}>
          <InputLabel id="selecting-role">役職</InputLabel>
          <Select
            labelId="selecting-role"
            value={selectingRole}
            onChange={(e) => setSelectingRole(e.target.value)}
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            <MenuItem value="all">all</MenuItem>
            {searchableRole.map((role, key) => (
              <MenuItem key={key} value={role}>{role}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={sortIcon}
          endIcon={sortIcon}
          onClick={toggleSortOrder}
          sx={{ minWidth: 100 }}
        >
          ID: {sortOrder === "asc" ? "昇順" : "降順"}
        </Button>
      </Box>
      <Container sx={{ mt: 2 }}>
        {sortedUser.map(user => (
          <UserCard key={user.id} user={user} onUserDeleted={handleUserDeleted} />
        ))}
      </Container>
    </Box>
  );
}

export default UserList;
```