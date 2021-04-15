<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\ChapterlanguageSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Chapterlanguages';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="chapterlanguage-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Chapterlanguage', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'fkchapter',
            'fklanguage',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
