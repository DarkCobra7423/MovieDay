<?php

namespace app\controllers;

use Yii;
use app\models\Chapterlanguage;
use app\models\ChapterlanguageSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * ChapterlanguageController implements the CRUD actions for Chapterlanguage model.
 */
class ChapterlanguageController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Chapterlanguage models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new ChapterlanguageSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Chapterlanguage model.
     * @param integer $fkchapter
     * @param integer $fklanguage
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($fkchapter, $fklanguage)
    {
        return $this->render('view', [
            'model' => $this->findModel($fkchapter, $fklanguage),
        ]);
    }

    /**
     * Creates a new Chapterlanguage model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Chapterlanguage();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'fkchapter' => $model->fkchapter, 'fklanguage' => $model->fklanguage]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Chapterlanguage model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $fkchapter
     * @param integer $fklanguage
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($fkchapter, $fklanguage)
    {
        $model = $this->findModel($fkchapter, $fklanguage);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'fkchapter' => $model->fkchapter, 'fklanguage' => $model->fklanguage]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Chapterlanguage model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $fkchapter
     * @param integer $fklanguage
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($fkchapter, $fklanguage)
    {
        $this->findModel($fkchapter, $fklanguage)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Chapterlanguage model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $fkchapter
     * @param integer $fklanguage
     * @return Chapterlanguage the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($fkchapter, $fklanguage)
    {
        if (($model = Chapterlanguage::findOne(['fkchapter' => $fkchapter, 'fklanguage' => $fklanguage])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
