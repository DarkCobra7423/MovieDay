<?php

namespace app\controllers;

use Yii;
use app\models\Genremultimedia;
use app\models\GenremultimediaSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * GenremultimediaController implements the CRUD actions for Genremultimedia model.
 */
class GenremultimediaController extends Controller
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
     * Lists all Genremultimedia models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new GenremultimediaSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', compact('searchModel', 'dataProvider'));
        /*
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);*/
    }

    /**
     * Displays a single Genremultimedia model.
     * @param integer $fkgenre
     * @param integer $fkmultimedia
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($fkgenre, $fkmultimedia)
    {
        return $this->render('view', [
            'model' => $this->findModel($fkgenre, $fkmultimedia),
        ]);
    }

    /**
     * Creates a new Genremultimedia model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Genremultimedia();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'fkgenre' => $model->fkgenre, 'fkmultimedia' => $model->fkmultimedia]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Genremultimedia model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $fkgenre
     * @param integer $fkmultimedia
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($fkgenre, $fkmultimedia)
    {
        $model = $this->findModel($fkgenre, $fkmultimedia);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'fkgenre' => $model->fkgenre, 'fkmultimedia' => $model->fkmultimedia]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Genremultimedia model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $fkgenre
     * @param integer $fkmultimedia
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($fkgenre, $fkmultimedia)
    {
        $this->findModel($fkgenre, $fkmultimedia)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Genremultimedia model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $fkgenre
     * @param integer $fkmultimedia
     * @return Genremultimedia the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($fkgenre, $fkmultimedia)
    {
        if (($model = Genremultimedia::findOne(['fkgenre' => $fkgenre, 'fkmultimedia' => $fkmultimedia])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
