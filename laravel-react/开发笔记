* [Build a React App With a Laravel RESTful Back End: Part 1, Laravel 5.5 API](https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-restful-backend-part-1-laravel-5-api--cms-29442)
* [Build a React App With a Laravel Back End: Part 2, React](https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-backend-part-2-react--cms-29443)

#### Laravel开发

1. 安装和搭建Laravel工程

		composer  create-project  --prefer-dist  laravel/laravel  laravel-react
		
2. 配置数据库环境

3. 路由

4. 模型

		创建模型以及该模型的迁移
		$ php artisan make:model Product -m
		
		数据库迁移
		$ php artisan migrate
		
5. 数据库填充(Database Seeding)

		创建填充类：
		$ php artisan make:seeder ProductsTableSeeder
		
		填充数据库：
		$ php artisan db:seed --class=ProductsTableSeeder
		

6. 控制器

		$ php artisan make:controller ProductsController
		
7. 验证和异常处理

		访问不存在的资源时，Laravel默认会展示404错误页面
		
		
#### React开发

1. 在Laravel中搭建React

		$ php  artisan preset react
		$ php run watch
		
		进行相关配置：‘
		
		1.在视图文件中：
		<div id="root"></div>
        <script src="{{mix('js/app.js')}}"></script>
        
        2.在assets下的app.js中导入React的根组件
        
        
        





