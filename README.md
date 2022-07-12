This is a project written in ***React framework*** ( [Next.js])

## Bắt đầu

Đầu tiên, clone code về máy

```bash
git clone https://github.com/its-workspace/AirWater-ReactJS-ECweb.git
```

Tiếp theo, install node_modules cho project

```
npm install
or
yarn
```

Tiếp theo thay đổi file `.env.example` thành `.env`

Tiếp theo, run project lên kiểm tra

```
npm run dev
# or
yarn dev
```

## Rules Git
 <strong>Quy trình task mới</strong>
```
git checkout develop

git pull

git checkout -b <branch mới>(Feature/mã task _ nội dung task ngắn ngọn) -> ex: git checkout -b feature/EC201_FunctionLogin

- Làm xong task
git status

git add .

git commit -m"(nội dung task)"

git status

git pull origin develop

git push (copy nội dung ở terminal gợi ý)

```
- Push xong lên github tạo Pull Request (PR)
 + Assign người review
 + Tạo xong copy URL PR gửi lên Slack task tên người Assign vào



 <strong>Quy trình fix conflict</strong>
```

git pull origin develop
```
- bị conflict thì copy <<<<< vào vscode search all để tìm những file bị conflict
- Sử lý xong
```
git add .

git commit -m"(nội dung task)"

git status

git pull origin develop

git push

```
- Push xong lên github tạo Pull Request (PR)
 + Assign người review
 + Tạo xong copy URL PR gửi lên Slack task tên người Assign vào

